radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "forward") {
        if (mainloop < step) {
            if (interloop < count - 1) {
                interloop += 1
                tmp_cnt = mainloop + 1
                g2_angle = forward_g2[mainloop] + Math.idiv((forward_g2[tmp_cnt] - forward_g2[mainloop]) * (interloop + 1), count)
                g5_angle = forward_g5[mainloop] + Math.idiv((forward_g5[tmp_cnt] - forward_g5[mainloop]) * (interloop + 1), count)
                g15_angle = forward_g15[mainloop] + Math.idiv((forward_g15[tmp_cnt] - forward_g15[mainloop]) * (interloop + 1), count)
                g20_angle = forward_g20[mainloop] + Math.idiv((forward_g20[tmp_cnt] - forward_g20[mainloop]) * (interloop + 1), count)
                angle1 = G1[mainloop] + Math.idiv((G1[tmp_cnt] - G1[mainloop]) * (interloop + 1), count)
                angle2 = G2[mainloop] + Math.idiv((G2[tmp_cnt] - G2[mainloop]) * (interloop + 1), count)
                angle3 = G3[mainloop] + Math.idiv((G3[tmp_cnt] - G3[mainloop]) * (interloop + 1), count)
                angle4 = G4[mainloop] + Math.idiv((G4[tmp_cnt] - G4[mainloop]) * (interloop + 1), count)
                basic.pause(value)
                robotbit.Servo(robotbit.Servos.S1, g2_angle)
robotbit.Servo(robotbit.Servos.S2, g5_angle)
robotbit.Servo(robotbit.Servos.S3, g15_angle)
robotbit.Servo(robotbit.Servos.S4, g20_angle)
robotbit.Servo(robotbit.Servos.S5, angle1)
robotbit.Servo(robotbit.Servos.S6, angle2)
robotbit.Servo(robotbit.Servos.S7, angle3)
robotbit.Servo(robotbit.Servos.S8, angle4)
            } else {
                interloop = 0
            }
            mainloop += 1
        } else {
            mainloop = 0
            robotbit.Servo(robotbit.Servos.S1, 90)
robotbit.Servo(robotbit.Servos.S2, 90)
robotbit.Servo(robotbit.Servos.S3, 80)
robotbit.Servo(robotbit.Servos.S4, 96)
robotbit.Servo(robotbit.Servos.S5, 120)
robotbit.Servo(robotbit.Servos.S6, 110)
robotbit.Servo(robotbit.Servos.S7, 120)
        }
    }
    if (name == "back") {
        if (mainloop2 < step) {
            if (interloop2 < count - 1) {
                tmp_cnt = mainloop2 + 1
                interloop2 += 1
                g2_angle = backward_g2[mainloop2] + Math.idiv((backward_g2[tmp_cnt] - backward_g2[mainloop2]) * (interloop2 + 1), count)
                g5_angle = backward_g5[mainloop2] + Math.idiv((backward_g5[tmp_cnt] - backward_g5[mainloop2]) * (interloop2 + 1), count)
                g15_angle = backward_g15[mainloop2] + Math.idiv((backward_g15[tmp_cnt] - backward_g15[mainloop2]) * (interloop2 + 1), count)
                g20_angle = backward_g20[mainloop2] + Math.idiv((backward_g20[tmp_cnt] - backward_g20[mainloop2]) * (interloop2 + 1), count)
                Z1 = G11[mainloop2] + Math.idiv((G11[tmp_cnt] - G11[mainloop2]) * (interloop2 + 1), count)
                Z2 = G12[mainloop2] + Math.idiv((G12[tmp_cnt] - G12[mainloop2]) * (interloop2 + 1), count)
                Z3 = G13[mainloop2] + Math.idiv((G13[tmp_cnt] - G13[mainloop2]) * (interloop2 + 1), count)
                Z4 = G14[mainloop2] + Math.idiv((G14[tmp_cnt] - G14[mainloop2]) * (interloop2 + 1), count)
                basic.pause(value)
                robotbit.Servo(robotbit.Servos.S1, g2_angle)
robotbit.Servo(robotbit.Servos.S2, g5_angle)
robotbit.Servo(robotbit.Servos.S3, g15_angle)
robotbit.Servo(robotbit.Servos.S4, g20_angle)
robotbit.Servo(robotbit.Servos.S5, Z1)
robotbit.Servo(robotbit.Servos.S6, Z2)
robotbit.Servo(robotbit.Servos.S7, Z3)
robotbit.Servo(robotbit.Servos.S8, Z4)
            } else {
                interloop2 = 0
            }
            mainloop2 += 1
        } else {
            mainloop2 = 0
            robotbit.Servo(robotbit.Servos.S1, 90)
robotbit.Servo(robotbit.Servos.S2, 90)
robotbit.Servo(robotbit.Servos.S3, 80)
robotbit.Servo(robotbit.Servos.S4, 96)
robotbit.Servo(robotbit.Servos.S5, 120)
robotbit.Servo(robotbit.Servos.S6, 110)
robotbit.Servo(robotbit.Servos.S7, 120)
        }
    }
    if (name == "come") {
        robotbit.Servo(robotbit.Servos.S5, 30)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S6, 30)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S6, 90)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S6, 30)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S6, 90)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S7, 170)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S8, 160)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S8, 90)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S8, 160)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S8, 90)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S6, 30)
robotbit.Servo(robotbit.Servos.S8, 160)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S6, 90)
robotbit.Servo(robotbit.Servos.S8, 90)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S6, 30)
robotbit.Servo(robotbit.Servos.S8, 160)
basic.pause(500)
        robotbit.Servo(robotbit.Servos.S6, 90)
robotbit.Servo(robotbit.Servos.S8, 90)
robotbit.Servo(robotbit.Servos.S5, 110)
robotbit.Servo(robotbit.Servos.S7, 80)
    }
})
function reset () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 80)
    robotbit.Servo(robotbit.Servos.S4, 96)
    robotbit.Servo(robotbit.Servos.S5, 110)
    robotbit.Servo(robotbit.Servos.S6, 90)
    robotbit.Servo(robotbit.Servos.S7, 80)
    robotbit.Servo(robotbit.Servos.S8, 90)
}
let Z4 = 0
let Z3 = 0
let Z2 = 0
let Z1 = 0
let interloop2 = 0
let mainloop2 = 0
let angle4 = 0
let angle3 = 0
let angle2 = 0
let angle1 = 0
let g20_angle = 0
let g15_angle = 0
let g5_angle = 0
let g2_angle = 0
let tmp_cnt = 0
let interloop = 0
let mainloop = 0
let step = 0
let count = 0
let G14: number[] = []
let G13: number[] = []
let G12: number[] = []
let G11: number[] = []
let backward_g20: number[] = []
let backward_g15: number[] = []
let backward_g5: number[] = []
let backward_g2: number[] = []
let G4: number[] = []
let G3: number[] = []
let G2: number[] = []
let G1: number[] = []
let forward_g20: number[] = []
let forward_g15: number[] = []
let forward_g5: number[] = []
let forward_g2: number[] = []
reset()
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
forward_g2 = [105, 98, 89, 74, 66, 75, 89, 98, 105, 180]
forward_g5 = [90, 101, 110, 101, 90, 80, 72, 82, 90, 180]
forward_g15 = [99, 88, 74, 60, 50, 60, 78, 87, 99, 180]
forward_g20 = [90, 96, 104, 112, 101, 90, 76, 89, 97, 180]
G1 = [115, 104, 91, 81, 71, 80, 93, 104, 111, 180]
G2 = [90, 110, 125, 110, 90, 75, 60, 75, 90, 180]
G3 = [110, 97, 84, 73, 65, 74, 86, 95, 108, 180]
G4 = [90, 75, 65, 75, 90, 110, 125, 115, 90, 180]
backward_g2 = [74, 80, 91, 109, 114, 104, 87, 80, 72, 180]
backward_g5 = [90, 105, 115, 105, 90, 78, 70, 80, 90, 180]
backward_g15 = [52, 60, 78, 99, 108, 96, 88, 74, 70, 180]
backward_g20 = [90, 96, 105, 112, 100, 87, 75, 89, 97, 180]
G11 = [66, 75, 89, 98, 105, 97, 89, 79, 67, 180]
G12 = [90, 75, 60, 75, 90, 110, 130, 110, 75, 180]
G13 = [65, 74, 86, 95, 108, 95, 86, 72, 65, 180]
G14 = [90, 105, 120, 126, 100, 75, 60, 70, 90, 180]
count = 9
step = 7
