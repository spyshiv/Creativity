/*Simple Circle*/
var bodySelection = d3.select("#simplecircle");

var svgSelection = bodySelection.append("svg")
                               .attr("width",100)
                                .attr("height",100);

var circleSelection = svgSelection.append("circle")
                                  .attr("cx",50)
                                  .attr("cy",50)
                                 .attr("r",50)
                                 .style("fill", "#99ddff");
/*Simple circle end*/


/*Target Circle*/
var circleRadii = [50,35, 20];
var svgContainer = d3.select("#targetcircle").append("svg")
                                    .attr("width", 100)
                                    .attr("height", 100);
var circles = svgContainer.selectAll("circle")
                         .data(circleRadii)
                          .enter()
                          .append("circle");
var circleAttributes = circles
                      .attr("cx", 50)
                       .attr("cy", 50)
                       .attr("r", function (d) { return d; })
                       .style("fill", function(d) {
                         var returnColor;
                         if (d === 50) { returnColor = "red";
                         } else if (d === 35) { returnColor = "white";
                         } else if (d === 20) { returnColor = "red"; }
                         return returnColor;
                       });
/* target circle end */

 var spaceCircles = [20,25,55,70];
 
 var svgContainer = d3.select("#fourcircle").append("svg")
                                     .attr("width", 100)
                                     .attr("height", 100);
 
 var circles = svgContainer.selectAll("circle")
                           .data(spaceCircles)
                           .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { 
                        var xvalue;
                        if(d===20){xvalue=d+5;}
                        else if(d===25){xvalue=d;}
                        else if(d===55){xvalue=d+15;}
                        else if(d===70){xvalue=d;}
                       	return xvalue; 
                       })
                       .attr("cy", function (d) { 
                        var yvalue;
                        if(d===20){yvalue=d+5;}
                        else if (d===25){yvalue=d+45;}
                        else if (d===55){yvalue=d-30;}
                        else if(d===70){yvalue=d;}
                       	return yvalue; })
                       .attr("r", 20)
                       .style("fill", function(d) {
                         var returnColor;
                         if (d ===20) { returnColor = "green";
                         } else if (d === 25) { returnColor = "purple";
                         } else if (d === 55) { returnColor = "red";}
                          else if (d === 70) { returnColor = "orange";  }
                         return returnColor;
                       });