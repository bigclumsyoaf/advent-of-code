var day3 = {
  process: function( debug ) {
    document.write("<h2>Day 3 Results</h2>");
    document.write("<p>Part A - Total: " + day3B.process(2,debug) + "</p>");
    document.write("<p>Part B - Total: " + day3B.process(12, debug) + "</p>");
    document.write("<hr/>");
  }
}

var day3A = {
  sum: 0,
  process: function( debug ) {
    this.sum = 0;
    for ( let i = 0; i < day3input.length; i++ ) {
      let high1 = 0;
      let high1Pos = 0;
      let high2 = 0;
      let high2Pos = 0;
      let row = day3input[i];
      for ( let c = 0; c < row.length-1; c++ ) {
        let val = row.charAt(c)*1;
        if ( val > high1 ) {
          high1 = val;
          high1Pos = c;
        }
      }
      for ( let c = high1Pos+1; c < row.length; c++ ) {
        let val = row.charAt(c)*1;
        if ( val > high2 ) {
          high2 = val;
          high2Pos = c;
        }
      }
      let current = (high1*10) + high2;
      if ( debug ) console.log( "  Row " + i + " - Highs: " + high1 + " (pos " + high1Pos + "), " + high2 + " (pos " + high2Pos + ") -> " + current );
      this.sum += current;
    }
    return this.sum;
  }
}

var day3B = {
  sum: 0,
  process: function( len, debug ) {
    this.sum = 0;
    for ( let i = 0; i < day3input.length; i++ ) {
      let high = new Array( len );
      for ( let h = 0; h < high.length; h++ ) {
        high[h] = 0;
      }
      let highPos = 0;
      let row = day3input[i];
      //console.log( "  Finding value for row " + i + ": " + row );
      for ( let h = 0; h < high.length; h++ ) {
        //console.log( "  Finding high for position " + h + " - " + highPos );
        for ( let c = highPos; c < row.length-(len-h-1); c++ ) {
          let val = row.charAt(c)*1;
          //console.log( "    Checking " + val + " against high " + high[h] + " for position " + h );
          if ( val > high[h] ) {
            high[h] = val;
            highPos = c+1;
          }
        }
      }
      let current = "";
      for ( let h = 0; h < high.length; h++ ) {
        current += high[h];
      }
      current = current*1;
      if ( debug ) console.log( "  Row " + i + " = " +  current );
      this.sum += current;
    }
    return this.sum;
  }
}