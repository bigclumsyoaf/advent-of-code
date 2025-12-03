var day2 = {
  process: function( debug ) {
    document.write("<h2>Day 2 Results</h2>");
    document.write("<p>Part A - Total: " + day2A.process(debug) + "</p>");
    document.write("<p>Part B - Total: " + day2B.process(debug) + "</p>");
    document.write("<hr/>");
  }
}

var day2A = {
  sum: 0,
  process: function( debug ) {
    this.sum = 0;
    let ranges = day2input.split(",");
    for ( let i = 0; i < ranges.length; i++ ) { 
      let parts = ranges[i].split("-");
      let start = parts[0]*1;
      let end = parts[1]*1;
      for ( let n = start; n <= end; n++ ) {
        let parta = n.toString().substring(0, Math.ceil(n.toString().length/2));
        let partb = n.toString().substring(Math.ceil(n.toString().length/2));
        //if ( debug ) console.log( n.toString() + " -> " + parta + " + " + partb + " = " + (parta===partb) );
        if ( parta === partb ) this.sum+=(n*1);
      }  
    }
    return this.sum;
  }
}

var day2B = {
  sum: 0,
  process: function( debug ) {
    this.sum = 0;
    let ranges = day2input.split(",");
    for ( let i = 0; i < ranges.length; i++ ) { 
      let parts = ranges[i].split("-");
      let start = parts[0]*1;
      let end = parts[1]*1;
      for ( let n = start; n <= end; n++ ) 
      {
        let test = "";
        if ( n.toString().length==1 ) continue;
        for ( let c = 0; c < n.toString().length/2; c++ )
        {
          test += n.toString().charAt(c);
          let fulltest = "";
          for ( let d=0; d<n.toString().length/test.length; d++ ) 
          {
            fulltest += test;
          }
          //if ( debug ) console.log( "  Testing " + fulltest + " === " + n.toString()  + " - " + (fulltest == n.toString()) );
          if ( fulltest.toString() == n.toString() ) 
          {
            if ( debug ) console.log( n.toString() + " -> " + test + " = " + fulltest + " == "+ n.toString() );
            this.sum+=(n*1);
            break;
          }
        }
      }  
    }
    return this.sum;
  }
}