var bodySelection = d3.select("#simplecircle");

var svgSelection = bodySelection.append("svg")
                               .attr("width",100)
                                .attr("height",100);

var circleSelection = svgSelection.append("circle")
                                  .attr("cx",50)
                                  .attr("cy",50)
                                 .attr("r",50)
                                 .style("fill", "#99ddff");

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