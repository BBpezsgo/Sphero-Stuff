// https://sdk.sphero.com/documentation/sdk-documents

declare type Color = { r: number, g: number, b: number }
declare type Vector3 = { x: number, y: number, z: number }
declare type Vector2 = { x: number, y: number }
declare type Orientation = { pitch: number, roll: number, yaw: number }
declare type ColorChannel = 'red' | 'green' | 'blue'
declare type IRChannel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

declare function exitProgram(): unknown
/**
 * `await roll()` combines heading (0 - 360°), speed (-255 - 255), and duration(time (s)) to make the robot roll with one line of code.
 * For example, to have the robot roll at 90°, at speed 200 for 2s, use `await roll(90, 200, 2)`.
 * @param degrees 0° - 360°
 * @param speed -255 - 255
 */
declare function roll(degrees: number, speed: number, sec: number): Promise<unknown>
/**
 * `await rawMotor()` controls the electrical power sent to the left
 * and right motors independently, on a scale from -255 to 255
 * where positive is forward, negative is backward, and 0 is
 * stopped. If you set both motors to full power the robot will
 * jump because stabilization (use of the IMU to keep the robot
 * upright) is disabled when using this command. This is different
 * from setSpeed because `await rawMotor()` sends an "Electromotive force"
 * to the motors, whereas `setSpeed` is a target speed measured by the
 * encoders. For example, to set the raw motors to full power for
 * 4s, making the robot jump off the ground,
 * use `await rawMotor(255, 255, 4)`.
 */
declare function rawMotor(left: number, right: number, sec: number): Promise<unknown>
/**
 * `resetAim()` resets the heading calibration (aim) angle to use the
 * current direction of the robot as 0°, within a range of 0-360°.
 * For example, use `resetAim(90)` to use the current right facing
 * direction of the robot as 0°. When used in the block canvas,
 * `resetAim()` is limited to set the current front facing direction
 * of the robot as 0°.
 */
declare function resetAim(baseDegrees: number): unknown
declare function toRadians(): unknown
declare function toDegrees(): unknown
declare function onColor(): unknown
/**
 * `stopRoll()` sets the speed to zero to stop the robot, effectively the same as the `setSpeed(0)` command.
 */
declare function stopRoll(): unknown
/**
 * `setMainLed()` changes the color of the main LED light, or the full
 * matrix on Sphero BOLT. Set this using RGB (red, green, blue)
 * values on a scale of 0 - 255. For example, the above green
 * color is expressed as `setMainLed({ r: 90, g: 255, b: 90 })`.
 */
declare function setMainLed(color: Color): void
/**
 * `setSpeed()` sets the speed of the robot from -255 to 255, where positive speed is forward,
 * negative speed is backward, and 0 is stopped. Each robot type translates this
 * value differently into a real world speed; Ollie is almost three
 * times faster than Sphero. For example, use `setSpeed(188)` to set
 * the speed to 188 which persists until you set a different speed.
 * @param speed -255 to 255
 */
declare function setSpeed(speed: number): unknown
/**
 * `setHeading()` sets the direction the robot rolls.
 * Assuming you aim the robot with the blue tail light facing you,
 * then 0° is forward, 90° is right, 270° is left, and 180° is backward.
 * For example, use `setHeading(90)` to face right.
 */
declare function setHeading(degrees: number): unknown
declare function speak(): unknown
declare function speak(message: string, param2: boolean): Promise<unknown>
/**
 * `await spin()` spins the robot for a given number of degrees over time,
 * with 360° being a single revolution. For example,
 * to spin the robot 360° over 1s, use: `await spin(360, 1)`.
 * Use `setSpeed()` prior to `await spin()` to have the robot move in circle or an arc or circle.
 */
declare function spin(degrees: number, sec: number): Promise<unknown>
/**
 * `await strobe()` repeatedly blinks the main LED lights.
 * The period is the time, in seconds, the light stays on
 * during a single blink; cycles is the total number of blinks.
 * The time for a single cycle is twice the period (time for
 * a blink plus the same amount of time for the light to be off).
 * Another way to say this is the period is 1/2 the time it takes
 * for a single cycle. So, to strobe green 15 times in 3 seconds,
 * use `await strobe({ r: 255, g: 57, b: 66 }, (3 / 15) * 0.5, 15)`.
 */
declare function strobe(color: Color, sec: number, count: number): Promise<unknown>
/**
 * @param intensity 0 - 255 (inclusive)
 */
declare function setBackLed(intensity: number): void
/**
 * `setStabilization(true)` turns the stabilization system on and
 * `setStabilization(false)` turns it off.
 * Stabilization is normally "on" to keep the robot upright
 * using the Inertial Measurement Unit (IMU), which is a
 * combination of readings from the Accelerometer (directional acceleration),
 * Gyroscope (rotation speed), and Encoders (location and distance).
 * 
 * After calling `setStabilization(false)` and then powering the motors,
 * the robot will not balance. This will result in unstable behaviors
 * like wobbly driving or jumping if you set the power very high.
 * Some use cases to turn it off are: 
 * 1. Jumping: Set Raw Motor to max values and the robot will jump off the ground! 
 * 2. Gyro: Programs like the Spinning Top where you want to to isolate the Gyroscope readings rather than having the robot auto balance inside the shell.
 * 
 * When stabilization is off you can't use setSpeed to set
 * a speed because it requires the control system to be on
 * to function. However, you can control the motors using
 * Raw Motor with `await rawMotor()` when the control system is off.
 */
declare function setStabilization(value: boolean): unknown
declare function startIRBroadcast(nearChannel: IRChannel, farChannel: IRChannel): unknown
declare function startIRFollow(nearChannel: IRChannel, farChannel: IRChannel): unknown
declare function startIREvade(nearChannel: IRChannel, farChannel: IRChannel): unknown
declare function stopIRBroadcast(): unknown
declare function stopIRFollow(): unknown
declare function stopIREvade(): unknown
declare function sendIRMessage(message: number, intensity: number): unknown
declare function delay(sec: number): Promise<unknown>
/**
 * `await fade()` changes the main LED lights from one color to another over
 * a period of seconds. For example, to fade from green to blue over 3s,
 * use `await fade({ r: 0, g: 255, b: 0 }, { r: 0, g: 0, b: 255 }, 3.0)`.
 */
declare function fade(colorFrom: Color, colorTo: Color, sec: number): Promise<unknown>
declare function getCurrentTime(): unknown
declare function getElapsedTime(): number
declare function getHeading(): number
declare function getSpeed(): number
declare function getBackLed(): { b: number }
declare function getDoorLed1(): unknown
declare function getDoorLed1(): unknown
declare function getDoorLed2(): unknown
declare function getMainLed(): Color
declare function getSideLed1(): unknown
declare function getSideLed2(): unknown
declare function getLeftHeadlightLed(): unknown
declare function getRightHeadlightLed(): unknown
declare function getLocation(): Vector2
declare function getVelocity(): Vector2
declare function getOrientation(): Orientation
declare function getAcceleration(): Vector3
declare function getGyroscope(): Orientation
declare function getVerticalAcceleration(): unknown
/**
 * @returns cm
 */
declare function getDistance(): number
declare function getRawMotor(): unknown
declare function getStabilization(): unknown
declare function getRVRLeds(): unknown
declare function getConnectedRobotType(): unknown
declare function getRandomFloat(min: number, max: number): unknown
declare function getRandomInt(min: number, max: number): unknown
/**
 * `setMainLed(getRandomColor())` chooses a random color value from the full
 * spectrum of 0 - 255 on each color channel. If used in a loop you can
 * expect the RGB values to be different each time through the loop.
 * On Sphero BOLT, this command sets all 64 pixels on the LED matrix
 * to the specified color. Also see the Color Operators and Color Variables.
 */
declare function getRandomColor(): Color
/**
 * @returns 0 - 15
 */
declare function getDomeLeds(): number
declare function getHoloProjectorLed(): number
declare function getLogicDisplayLeds(): number
declare function listenForColorSensor(): unknown
declare function listenForIRMessage(): unknown
declare function buildString(): unknown
/**
 * `setBackLed()` sets the brightness of the back aiming
 * LED, aka the "Tail Light". This LED is limited to blue
 * only, with a brightness scale from 0 - 255. For example,
 * use `setBackLed(255)` to set the back LED to full brightness.
 * Use `await delay()` to set it on for a duration.
 * For example, to create a dim and a bright blink sequence use:
 * ```js
 * setBackLed(0);  // Dim
 * await delay(0.33);
 * setBackLed(255);  // Bright
 * await delay(0.33);
 * ```
 * 
 * **Note:**
 * Sphero BOLT, Sphero RVR, and Sphero RVR+ have an RGB LED for their
 * back LED, which means you can set a specific color. For example,
 * `setBackLed({ r: 0, g: 255, b: 0 })` turns the back
 * LED green on BOLT and RVR/RVR+. 
 */
declare function setBackLed(color: Color): void

declare enum MatrixAnimationTransition {
	None,
	Fade
}

declare enum MatrixRotation {
	0,
	90,
	180,
	270
}

declare function registerEvent(event: EventType.onCollision, callback: () => void): void
declare function registerEvent(event: EventType.onFreefall, callback: () => void): void
declare function registerEvent(event: EventType.onLanding, callback: () => void): void
declare function registerEvent(event: EventType.onGyroMax, callback: () => void): void
declare function registerEvent(event: EventType.onCharging, callback: () => void): void
declare function registerEvent(event: EventType.onNotCharging, callback: () => void): void
declare function registerEvent(event: EventType.onIRMessage, callback: (channel: number) => void): void
declare function registerEvent(event: EventType.onColor, callback: (color: Color) => void): void
declare enum EventType {
	onCollision,
	onFreefall,
	onLanding,
	onGyroMax,
	onCharging,
	onNotCharging,
	onIRMessage,
	onColor,
}

//#region Sphero BOLT
/**
 * Supported by: **Sphero BOLT**
 * 
 * `await calibrateCompass()` calibrates the magnetometer by spinning
 * the robot in place. You need to run this command before
 * setting or getting the compass direction. Nearby metallic
 * and magnetic objects can affect the accuracy of the compass.
 */
declare function calibrateCompass(): Promise<void>
/**
 * Supported by: **Sphero BOLT**
 * 
 * `setCompassDirection()` sets the real-world direction based
 * on the last compass calibration. 0° is due north, 90° is due
 * east, 180° is due south, and 270° is due west. Requires the
 * Calibrate Compass command to be run before
 * you can set this value.
 * 
 * For example, use the below to point Sphero BOLT to the north:
 * ```js
 * async function startProgram() {
 *     await calibrateCompass();
 *     setCompassDirection(0);
 * }
 * ```
 */
declare function setCompassDirection(param0: number): void
declare function getCompassDirection(): numbr

/**
 * Supported by: **Sphero BOLT**
 * 
 * `pauseMatrixAnimation()` pauses an animation or scrolling text. Use `resumeMatrixAnimation()`
 * to resume an animation after pausing to start from the last frame played.
 */
declare function pauseMatrixAnimation(): void
/**
 * Supported by: **Sphero BOLT**
 * 
 * `setFrontLed()` changes the color of the front LED light.
 * Set this using RGB (red, green, blue) values on a scale of 0 - 255.
 * For example, the above magenta color is
 * expressed as `setFrontLed({ r: 239, g: 0, b: 255 })`.
 */
declare function setFrontLed(color: Color): void
/**
 * Supported by: **Sphero BOLT**
 * 
 * `playMatrixAnimation(0, true)` sets an image (1 frame)
 * or animation ( > 1 frame) on the 8x8 LED matrix using
 * 4 characteristics: frames, palette (limited to 16
 * colors per animation), fps (speed from 1-30 frames
 * per second), and transition style (fade, or not fade).
 * Use the `true` boolean to play an animation in a
 * perpetual loop, or `false` to play it once. If played
 * in a perpetual loop, it will play until interrupted
 * by a new `playMatrixAnimation(x)`, `clearMatrix()`,
 * `pauseMatrixAnimation()`, or
 * `resumeMatrixAnimation()` commands.
 * 
 * The animations are tedious to create in a text program,
 * so we recommend generating them in a block program, and
 * copying the code. You can't modify an animation while
 * a program is running because the Sphero Edu app pre-loads
 * the animations on the robot at program start.
 * The animations can take large amounts of data and it
 * would be impossible to send in real-time given the
 * physical limitations of Bluetooth bandwidth.
 * 
 * For example, below is a 2 frame animation and corresponding code that animates a smiley face:
 * *images not shown*
 * ```js
 * async function startProgram() {
 * 	  playMatrixAnimation(0);
 * }
 * 
 * registerMatrixAnimation({
 * 	  frames: [[[1, 1, 6, 6, 6, 6, 1, 1], [1, 6, 6, 6, 6, 6, 6, 1], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 6, 1, 1, 6, 6, 6], [6, 6, 6, 1, 1, 6, 6, 6], [1, 6, 6, 6, 6, 6, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]], [[6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [6, 1, 1, 6, 6, 1, 1, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 1, 1, 1, 1, 1, 1, 6], [1, 6, 1, 1, 1, 1, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]]],
 * 	  palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 16, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
 * 	  fps: 6,
 * 	  transition: MatrixAnimationTransition.None
 * });
 * ```
 */
declare function playMatrixAnimation(i: number, forever: boolean): void
/**
 * Supported by: **Sphero BOLT**
 * 
 * `clearMatrix()` clears the matrix so all matrix LED's are off. For example, this is useful
 * if you want to change from displaying
 * `playMatrixAnimation(x)` to displaying a `setMainLed()`.
 */
declare function clearMatrix(): void
/**
 * Supported by: **Sphero BOLT**
 */
declare function resumeMatrixAnimation(): unknown
/**
 * Supported by: **Sphero BOLT**
 */
declare function registerMatrixAnimation(animation: {
	frames: number[][][]
	palette: Color[]
	fps: number
	transition: MatrixAnimationTransition
}): unknown
/**
 * Supported by: **Sphero BOLT**
 * 
 * `overrideMatrixAnimationFramerate()` sets a frame rate for all
 * subsequent animations, from 1 - 30 frames per second.
 * This rate overrides the frame rate set in the animation
 * definition. Set to `overrideMatrixAnimationFramerate(0)`
 * to disable this override and use the default frame rate
 * set for the subsequent matrix animations in your program. 
 */
declare function overrideMatrixAnimationFramerate(fps: 0 | number): void
/**
 * Supported by: **Sphero BOLT**
 * 
 * `overrideMatrixAnimationTransition(MatrixAnimationTransition.Fade)`
 * sets the transition between animation frames to fade, and
 * `overrideMatrixAnimationTransition(MatrixAnimationTransition.None)`
 * sets the transition to not fade. This transition overrides the
 * type set in subsequent matrix animations. Set to
 * `overrideMatrixAnimationTransition()` to disable this override
 * and use the default transition for the subsequent matrix
 * animations in your program. 
 * 
 * When using a fade transition, the matrix LED colors will fade between
 * each frame. This effect is not noticeable if your frame rate is high
 * (like 30 frames per second), but it is noticeable when you have a
 * low frame rate. When the frame rate is low, you will see each LED
 * color in one frame blend into the color set in the next frame. 
 */
declare function overrideMatrixAnimationTransition(transition: MatrixAnimationTransition): void
/**
 * Supported by: **Sphero BOLT**
 * 
 * `setMatrixRotation(MatrixRotation.180)` rotates the display direction of the matrix for
 * all subsequent animations and scrolling text. 0° is the default, forward facing
 * direction where the origin (0, 0) is maintained in the bottom left corner of
 * the matrix as shown below. 90° is right, 270° is left, and
 * 180° is upside down.
 */
declare function setMatrixRotation(rotation: MatrixRotation): void
/**
 * Supported by: **Sphero BOLT**
 * 
 * `setMatrixCharacter()` displays a single ASCII character on the LED matrix,
 * in a specified color. For example, use
 * `setMatrixCharacter('z', { r: 255, g: 255, b: 255 })` to display "z" in white.
 */
declare function setMatrixCharacter(character: string, color: Color): void
/**
 * Supported by: **Sphero BOLT**
 * 
 * `await scrollMatrixText('hi mom!', { r: 66, g: 56, b: 255 }, 30, true)` displays
 * a string of characters. You can also use the string builder to include or
 * concatenate variables and sensor values. You are limited to 25 ASCII
 * characters, a single text color, and can set a frame speed from 1 to
 * 30. You can use the `buildString()` operator here to concatenate dynamic
 * strings and values. When text scrolling starts, using the `true` boolean
 * forces the program to wait until the scroll completes before continuing
 * to the next command, whereas using the `false` boolean will progress the
 * program to the next command immediately.
 */
declare function scrollMatrixText(text: string, color: Color, fps: number, wait: boolean): Promise<void>
/**
 * Supported by: **Sphero BOLT**
 * 
 * `drawMatrixPixel({ r: 0, g: 0, b: 255 }, { x: 2, y: 3 })`
 * draws a single colored pixel at the (x, y) coordinate (2, 3). 
 */
declare function drawMatrixPixel(color: Color, position: Vector2): void
/**
 * Supported by: **Sphero BOLT**
 */
declare function drawMatrixLine(color: Color, from: Vector2, to: Vector2): unknown
/**
 * Supported by: **Sphero BOLT**
 */
declare function drawMatrixFill(color: Color, from: Vector2, to: Vector2): unknown
declare function getLuminosity(): number
declare function getFrontLed(): Color
//#endregion

//#region Sphero RVR/RVR+
declare function setRightLed(color: Color): unknown
declare function setLeftLed(color: Color): unknown
declare function setRightHeadlightLed(color: Color): unknown
declare function setLeftHeadlightLed(color: Color): unknown
/**
 * Supported by: **Sphero RVR/RVR+**
 * 
 * Sphero RVR and RVR+ have robust motor encoders, which ensures that
 * they can drive to a target distance with +/- 6mm of accuracy.
 * `await driveToDistance()` combines heading (0 to 360°), maximum
 * speed (-255 to 255), and distance (in centimeters) to make
 * RVR/RVR+ drive with one line of code. For example, if you want
 * RVR/RVR+ to drive at 90°, at a maximum speed of 200 for 200cm,
 * then use `await driveToDistance(90, 200, 200)`. Consider that
 * distance accuracy is dependent on multiple factors, including
 * the driving surface under RVR/RVR+ and the weight of any payload on board.
 * 
 * Since RVR and RVR+ are trying to accurately target a precise distance with
 * Drive to Distance, the firmware control system will manage speed differently
 * than when using `await roll()`. There is a period of acceleration and
 * deceleration at the start and end of the robot movement. This
 * acceleration ramping helps reduce the slippage that would impact
 * encoder accuracy. As a result, your maximum speed setting may not
 * be met if you have set your RVR/RVR+ to drive a shorter distance.
 * Experiment with your set distance and maximum speed to get the
 * results you need.
 */
declare function driveToDistance(headingDeg: number, speed: number, distanceCm: number): Promise<unknown>
declare function getColor(): Color
declare function getColor(channel: ColorChannel): number
declare function getColorChannel(channel: ColorChannel): number
//#endregion

//#region Star Wars Droid

type BB8Animations = {
	'Positive': 'Giddy' | 'Yes'
	'Negative': 'Angry' | 'No'
	'Action': 'Electrified' | 'Number 8' | 'Searching' | 'Square'
}

type BB9EAnimations = {
	'Action': 'Retreat' | 'Scan Sweep'
	'Positive': 'Affirmative' | 'Content' | 'Greetings' | 'Understood' | 'Yes'
	'Negative': 'Agitated' | 'Alarm' | 'Angry' | 'Antagonized' | 'Furious' | 'No'
	'Watch With Me': 'Angry' | 'Antagonized' | 'Bored' | 'Bow' | 'Defiant' | 'Disagree' | 'Disappointed' | 'Disbelief' | 'Double Take' | 'Doubtful' | 'Excited' | 'Frustrated' | 'Furious' | 'Happy' | 'Laugh' | 'No' | 'Ominous' | 'Relieved' | 'Shake' | 'Surprised' | 'Uncertain' | 'Yelling' | 'Yoohoo'
}

type R2D2Animations = {
	'Action': 'Drive' | 'Scan' | 'Sleep' | 'Spin'
	'Idle': 'Idle 1' | 'Idle 2' | 'Idle 3'
	'Negative': 'Alarm' | 'Angry' | 'Annoyed' | 'Ion Blast' | 'No' | 'Sad' | 'Scared'
	'Patrol': 'Alarm' | 'Hit' | 'Patrolling'
	'Positive': 'Chatty' | 'Confident' | 'Excited' | 'Happy' | 'Laugh' | 'Surprised' | 'Yes'
	'Watch With Me': 'Angry' | 'Anxious' | 'Bow' | 'Concern' | 'Curious' | 'Double Take' | 'Excited' | 'Fiery' | 'Frustrated' | 'Happy' | 'Jittery' | 'Laugh' | 'Long Shake' | 'No' | 'Ominous' | 'Relieved' | 'Sad' | 'Scared' | 'Shake' | 'Surprised' | 'Taunting' | 'Whisper' | 'Yelling' | 'Yoohoo'
}

//#endregion

//#region R2-D2 & R2-Q5
declare function setDomePosition(): unknown
declare function setStance(): unknown
declare function setWaddle(): unknown
declare function setHoloProjectorLed(): unknown
declare function setLogicDisplayLeds(): unknown
declare function getLastIRMessage(): unknown
//#endregion

//#region BB-9E
/**
 * @param intensity 0 - 15
 */
declare function setDomeLeds(intensity: number): unknown
//#endregion

declare class Sound {
	static play(wait: boolean): unknown

	readonly Game: {
		readonly Coin: {
			play(wait: boolean): unknown
		}
	}
}

// @ts-ignore
declare class Animation {
	[droidName: string]: {
		[category: string]: {
			[animationName: string]: {
				play(): Promise<unknown>
			}
			// @ts-ignore
			play(): Promise<unknown>
		}
		// @ts-ignore
		play(): Promise<unknown>
	}
}
