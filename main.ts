/**
 * This idea was from a student of mine during the summer of 2020 - KY
 * 
 * I did a little remix of it to clean up some code
 */
radio.onReceivedNumber(function (receivedNumber) {
    // If the first micro:bit sends a temperaute other 37 degrees - send a message asking if they need help. 
    if (receivedNumber > 37) {
        radio.sendString("help?")
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
        music.playTone(147, music.beat(BeatFraction.Sixteenth))
        music.playTone(165, music.beat(BeatFraction.Sixteenth))
        music.playTone(175, music.beat(BeatFraction.Sixteenth))
        music.playTone(196, music.beat(BeatFraction.Sixteenth))
        music.playTone(220, music.beat(BeatFraction.Sixteenth))
        music.playTone(247, music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        music.playTone(294, music.beat(BeatFraction.Sixteenth))
        music.playTone(330, music.beat(BeatFraction.Sixteenth))
        music.playTone(349, music.beat(BeatFraction.Sixteenth))
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
        music.playTone(494, music.beat(BeatFraction.Sixteenth))
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        music.playTone(698, music.beat(BeatFraction.Sixteenth))
        music.playTone(880, music.beat(BeatFraction.Sixteenth))
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        basic.pause(500)
    }
    // Display the tmperauter 
    basic.showNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Hello!")
})
radio.setGroup(1)
