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

/*Four Circles*/
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
/*Four circle ends*/

/*microsoft logo*/
var spaceRect = [0,50,55,60];
 
 var svgContainer = d3.select("#microsoftlogo").append("svg")
                                     .attr("width", 100)
                                     .attr("height", 100);
 
 var rects = svgContainer.selectAll("rect")
                           .data(spaceRect)
                           .enter()
                          .append("rect");

var circleAttributes = rects
                       .attr("x", function (d) { 
                        var xvalue;
                        if(d===0){xvalue=d;}
                        else if(d===50){xvalue=d;}
                        else if(d===55){xvalue=d-55;}
                        else if(d===60){xvalue=d-10;}
                       	return xvalue; 
                       })
                       .attr("y", function (d) { 
                        var yvalue;
                        if(d===0){yvalue=d;}
                        else if (d===25){yvalue=d-25;}
                        else if (d===55){yvalue=d-5;}
                        else if(d===60){yvalue=d-10;}
                       	return yvalue; })
                       .attr("width", 40)
                       .attr("height",40)
                       .style("fill", function(d) {
                         var returnColor;
                         if (d ===0) { returnColor = "#f65314";
                         } else if (d === 50) { returnColor = "#7cbb00";
                         } else if (d === 55) { returnColor = "#00a1f1";}
                          else if (d === 60) { returnColor = "#ffbb00";  }
                         return returnColor;
                       });
/*Microsoft logo end*/