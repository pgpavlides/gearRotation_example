
# Gear Rotation Calculations

To calculate the rotation of gears and apply it correctly in an animation such as with React Spring or Framer Motion, we need the following data for each gear:

1. **Number of Teeth (N)**: The number of teeth on each gear will determine the gear ratio when gears are meshed together.
2. **Input Speed (S)**: The rotational speed of the input gear, usually in revolutions per minute (RPM) or revolutions per second (RPS).
3. **Direction of Rotation**: Gears meshed together rotate in opposite directions. Knowing the initial direction of the input gear will determine the direction of the other gears.
4. **Reference Duration (D)**: If you are animating, this is the time it takes for the input gear to complete one full rotation in the animation. All other gears' rotation durations will be calculated relative to this.
5. **Gear Arrangement**: Whether gears are directly meshed together or if there are intermediary gears, which can change the effective gear ratios.

With this data, we can calculate:

- The **Gear Ratio (GR)** between two meshed gears using their number of teeth:
  ```math
  GR = \frac{N_{input}}{N_{other}}
  ```
  
- The **Rotational Speed** of each gear relative to the input gear:
  ```math
  S_{other} = S_{input} \times GR
  ```
  
- The **Animation Duration** for each gear's full rotation based on the reference duration:
  ```math
  D_{other} = D_{input} \times \frac{1}{GR}
  ```

For the animation, it's important to note:

- If Gear A directly drives Gear B, then the gear ratio is calculated as:
  ```math
  GR = \frac{N_B}{N_A}
  ```
  and Gear B rotates in the opposite direction to Gear A.

- If Gear A drives Gear B via another gear (an idler gear), the direction of rotation for Gear B will be the same as Gear A, but the gear ratio calculations remain unchanged.


