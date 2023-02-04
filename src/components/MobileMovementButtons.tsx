import React, { useEffect } from "react";
// import {useKeyboardControls} from "@react-three/drei";

export default function MobileMovementButtons({pointerControls}:any) {

  // const [, get] = useKeyboardControls()
  // const { forward, backward, left, right, jump, shift, control, action, place, info, debug } = get()


  // useEffect(() => {
  //   console.log(keyboardControls)
  // }, [keyboardControls])

  function handleRightPan() {
    console.log(pointerControls)

    // @ts-ignore
    pointerControls.current.camera.rotation.y = pointerControls.current.camera.rotation.y -0.1;
    setTimeout(() => { // @ts-ignore
      pointerControls.current.unlock()},1);
  }

  function handleLeftPan() {
    console.log(pointerControls)

    // @ts-ignore
    pointerControls.current.camera.rotation.y = pointerControls.current.camera.rotation.y +0.1;
    setTimeout(() => { // @ts-ignore
      pointerControls.current.unlock()},1);
  }

  function handleRightMove() {
    console.log(pointerControls)

    // @ts-ignore
    // pointerControls.current.camera.rotation.y = pointerControls.current.camera.rotation.y -0.1;
    setTimeout(() => { // @ts-ignore
      pointerControls.current.unlock()},1);
  }
  function handleUpMove() {

    console.log(pointerControls)

    // @ts-ignore
    // pointerControls.current.camera.rotation.y = pointerControls.current.camera.rotation.y -0.1;
    setTimeout(() => { // @ts-ignore
      pointerControls.current.unlock()},1);
  }
  function handleLeftMove() {
    console.log(pointerControls)

    // @ts-ignore
    // pointerControls.current.camera.rotation.y = pointerControls.current.camera.rotation.y -0.1;
    setTimeout(() => { // @ts-ignore
      pointerControls.current.unlock()},1);
  }
  function handleDownMove() {
    console.log(pointerControls)

    // @ts-ignore
    // pointerControls.current.camera.rotation.y = pointerControls.current.camera.rotation.y -0.1;
    setTimeout(() => { // @ts-ignore
      pointerControls.current.unlock()},1);
  }
  function handlePPress() {
    console.log(pointerControls)

    // @ts-ignore
    // pointerControls.current.camera.rotation.y = pointerControls.current.camera.rotation.y -0.1;
    setTimeout(() => { // @ts-ignore
      pointerControls.current.unlock()},1);
  }

  function handleEPress() {
    console.log(pointerControls)

    // @ts-ignore
    // pointerControls.current.camera.rotation.y = pointerControls.current.camera.rotation.y -0.1;
    setTimeout(() => { // @ts-ignore
      pointerControls.current.unlock()},1);
  }

  function handleIPress() {
    console.log(pointerControls)

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "i" }));

    // @ts-ignore
    setTimeout(() => { // @ts-ignore
      pointerControls.current.unlock()},1);
  }

  function handleSpacePress() {
    // console.log(appRef)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // appRef.current.dispatchEvent(new KeyboardEvent('keypress', {
    //   key: 'Space'
    // }));

    setTimeout(() => { // @ts-ignore
      pointerControls.current.unlock()},1);
  }

  return (


    <div className={`infoModal__mobile-content movementControls`}>
      <div className={`movementControls__container`}>
        <div className={`movementControls__panContainer`}>

          <div className={`rightPan`} onClick={handleRightPan}>
            &#8594;
          </div>

          <div className={`leftPan`} onClick={handleLeftPan}>
            &#8592;
          </div>
        </div>

        <div className={`movementControls__movementContainer`}>
          <div className={`rightMove`} onClick={handleRightMove}>
            &#8594;
          </div>
          <div className={`leftMove`} onClick={handleLeftMove}>
            &#8592;
          </div>
          <div className={`upMove`} onClick={handleUpMove}>
            &#8593;
          </div>
          <div className={`downMove`} onClick={handleDownMove}>
            &#8595;
          </div>
        </div>


        <div className={`movementControls__buttonsContainer`}>
          <div className={`movementControls__buttonsContainerKeys`}>
            <div className={`ePress`} onClick={handleEPress}>
              [e]
            </div>
            <div className={`iPress`} onClick={handleIPress}>
              [i]
            </div>
            <div className={`pPress`} onClick={handlePPress}>
              [p]
            </div>
          </div>

          <div className={`movementControls__buttonsContainerSpace`}>
            <div className={`spacePress`} onClick={handleSpacePress}>
              [space]
            </div>
          </div>
          {/*<div className={`leftMove`} onClick={handleLeftMove}>*/}
          {/*  &#8592;*/}
          {/*</div>*/}
          {/*<div className={`upMove`} onClick={handleUpMove}>*/}
          {/*  &#8593;*/}
          {/*</div>*/}
          {/*<div className={`downMove`} onClick={handleDownMove}>*/}
          {/*  &#8595;*/}
          {/*</div>*/}
        </div>
      </div>
    </div>

  )
}
