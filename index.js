class Driver {
  constructor(name, dayJoined) {
    this.name = name
    this.startDate = new Date(dayJoined)
  }

  yearsExperienceFromBeginningOf(year){
    return (new Date(year).getFullYear()) - (this.startDate.getFullYear()) + 1
  }
} // End of Driver Class

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let vertDiff = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    let begIndex = eastWest.findIndex((avenue) => avenue == this.beginningLocation.horizontal)
    let endIndex = eastWest.findIndex((avenue) => avenue == this.endingLocation.horizontal)

    let horDiff = Math.abs(begIndex - endIndex)

    return vertDiff + horDiff
  }

  estimatedTime(peakBoolean){
    if (peakBoolean) {
      return this.blocksTravelled()/ 2
    } else {
      return this.blocksTravelled()/ 3
    }
  }
} // End of Route Class
