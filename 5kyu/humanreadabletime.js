/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */


// seconds will always be between (and inslusive of) 0 to 35999

function humanReadable (seconds) {
    // calculation for hours
    let hours = Math.floor(seconds / 3600)
    // calculate left over seconds
      seconds -= hours * 3600
    // handle cases of single digit hours (pad with 0)
      if (hours < 10) {
        hours = String(hours).padStart(2, "0")
      }
    // calculation for mins
    let mins = Math.floor(seconds / 60)
    // calculate left over seconds
      seconds -= mins * 60
    // handle cases of single digit mins (pad with 0)
      if (mins < 10) {
        mins = String(mins).padStart(2, "0")
      }
    // calculation for seconds
    // handle cases of single digit mins (pad with 0)
      if (seconds < 10) {
        seconds = String(seconds).padStart(2, "0")
      }
    // return result in human readable time "00:00:00"
      return hours + ":" + mins + ":" + seconds
    }