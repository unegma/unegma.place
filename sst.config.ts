import { SSTConfig } from "sst";
import { App, Bucket, NextjsSite } from "sst/constructs";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

const STAGE_PROD_NAME = `${process.env.STAGE_PROD_NAME}`;
const STAGE_DEV_NAME = `${process.env.STAGE_DEV_NAME}`;

// todo found out that --stage prod vs --prod (comes as true)

// todo local isn't working because didnt realise the difference between stage and prod (stage is a stage, prod is a production ready build). local will have the timhc22 stage but development node_env, staging will have production node_env but staging as staging, and production will have staging as production and node_env as production

// this got complicated because I didn't separate stages from environments. local dev server is node_env development, but both staging and production seem to use Node_env production (at least the backend api seem to think so), but the build in here doesn't seem to have production true unless I set using --prod, the frontend might itself work differently too

// SEEMS LIKE SETTING --STAGE PROD MAKES A DIFFERENT DEPLOYMENT TO NOT SETTING IT AT ALL, FOR DEV IT SEEMS TO BE TIMHC22 (AS SET IN THE STAGE AT THE BEGINNING). MIGHT WANT TO REMOVE STAGE ALL TOGETHER FOR PRODUCTION?
// setting stage for prod seems to cause the production deploy to get wiped out when deploying dev...

// REMEMBER THAT STAGE IS A STAGE AND PROD IS A PRODUCTION STAGE, NOT PRODUCTION ENVIRONMENT

// can test these by running `npm delete` BUT BE CAREFUL AS IT WILL DELETE THE DEPLOYMENT, SO ONLY RUN IF IT IS NOT THERE YET
export default {
  config(_input: any) {
    console.log('## Setting up Deployment')
    console.log(_input);
    console.log(`Prod environment is set to ${_input.prod}`);
    return {
      // _input.stage only works here, hence using 'name' for checks in the stack below
      // this might be a string or a boolean, so using ==
      // _input.stage should also be set now that I've added `npx sst deploy --prod --stage prod` to the package.json (--stage prod is to try and get the next-sitemap config working correctly)
      // todo this should really be changes to _input.stage == 'prod' and _input.stage == 'staging' to make it more clear
      name: _input.prod == true ? STAGE_PROD_NAME : STAGE_DEV_NAME,
      region: _input.prod == true ? process.env.AWS_REGION_PROD : process.env.AWS_REGION_DEV,
      profile: _input.prod == true ? process.env.AWS_PROFILE_PROD : process.env.AWS_PROFILE_DEV, // prod is used as the input stage, but the process.env is 'production'
    };
  },
  stacks(app: App) {
    app.stack(function Site({ stack }) {
      console.log('## Beginning Deployment')
      console.log('### Whole App')
      console.log(app)
      // const stage = app.stage;
      const name = app.name;

      // Log the stage and environment variables
      // console.log(`Stage: ${stage}`);
      console.log(`Name: ${name}`);

      const bucket = new Bucket(stack, "public");

      const certArn =
        name === STAGE_PROD_NAME
          ? process.env.PROD_CERT // prod
          : process.env.DEV_CERT; // dev

      // Validate domain names
      const domainName =
        name === STAGE_PROD_NAME
          ? process.env.BASE_URL
          : process.env.DEV_BASE_URL;

      if (!certArn) {
        throw new Error(`Domain name is not set.`);
      }
      if (!domainName) {
        throw new Error(`Domain name is not set.`);
      }

      // Log the selected domain name
      console.log(`Using domain name: ${domainName}`);

      const certificateId = name === STAGE_PROD_NAME ? `${process.env.ACRONYM}ProdCert` : `${process.env.ACRONYM}DevCert`;

      console.log(`Using Certificate ARN: ${certArn}`)
      console.log(`Using Certificate Id: ${certificateId}`)

      // const site = new NextjsSite(stack, "site", {
      const site = new NextjsSite(stack, name, {
        bind: [bucket],
        customDomain: {
          isExternalDomain: true,
          domainName: domainName,
          cdk: {
            // @ts-ignore // todo this is a weird error, maybe only as a result of updating node?
            certificate: Certificate.fromCertificateArn(
              stack,
              certificateId,
              certArn
            ),
          },
        },
      });

      console.log(`Using site: ${site}`)

      stack.addOutputs({
        SiteUrl: site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
