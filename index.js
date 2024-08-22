import "./styles.css";
import bread from "./bread.jpg";

// Create elements
let homeHeader = document.createElement("h2");
homeHeader.id = "pageTitle";
homeHeader.innerText = "Home";

let pageContentOne = document.createElement("p");
pageContentOne.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices magna at pharetra lobortis. In aliquet est fermentum, vehicula tellus eu, elementum leo. sit amet. Phasellus tincidunt tincidunt erat nec viverra. Praesent eu metus sed leo luctus accumsan in sit amet eros. Nulla euismod eleifend vestibulum. Vivamus tincidunt velit non ante aliquet ultricies. In nec tempus arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices magna at pharetra lobortis. In aliquet est fermentum, vehicula tellus eu, elementum leo.  Morbi ut justo aliquet, tempor risus nec, fermentum diam. Nulla semper posuere erat, eu semper dolor egestas ac. Duis pretium mattis purus, id congue arcu lobortis  sit amet. Phasellus tincidunt tincidunt erat nec viverra. Praesent eu metus sed leo luctus accumsan in sit amet eros. Nulla euismod eleifend vestibulum. Praesent commodo accumsan odio, ac mollis velit sagittis id. Phasellus cursus tincidunt libero at fringilla. Proin in gravida metus. Vivamus in ultrices magna. Integer  vitae molestie erat. Vestibulum nulla urna, pellentesque nec est et, tincidunt consectetur ligula. In placerat felis a mauris venenatis, a dapibus sapien finibus. Suspendisse fringilla tempus magna eu pulvinar. Vestibulum pharetra diam eu nunc porta molestie. Nunc quam metus, dictum ut vehicula nec, vestibulum a justo. Cras in tincidunt eros. Phasellus placerat mauris elit, eget vulputate risus imperdiet ut. Ut dapibus turpis interdum, lobortis diam sed, gravida lorem. Integer dignissim pretium elementum. Morbi fermentum aliquet augue eget placerat. Morbi ut justo aliquet, tempor risus nec, fermentum diam. Nulla semper posuere erat, eu semper dolor egestas ac. Duis pretium mattis purus, id congue arcu lobortis"

let pageContentTwo = document.createElement("p");
pageContentTwo.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices magna at pharetra lobortis. In aliquet est fermentum, vehicula tellus eu, elementum leo. sit amet. Phasellus tincidunt tincidunt erat nec viverra. Praesent eu metus sed leo luctus accumsan in sit amet eros. Nulla euismod eleifend vestibulum. Vivamus tincidunt velit non ante aliquet ultricies. In nec tempus arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices magna at pharetra lobortis. In aliquet est fermentum, vehicula tellus eu, elementum leo.  Morbi ut justo aliquet, tempor risus nec, fermentum diam. Nulla semper posuere erat, eu semper dolor egestas ac. Duis pretium mattis purus, id congue arcu lobortis  sit amet. Phasellus tincidunt tincidunt erat nec viverra. Praesent eu metus sed leo luctus accumsan in sit amet eros. Nulla euismod eleifend vestibulum. Praesent commodo accumsan odio, ac mollis velit sagittis id. Phasellus cursus tincidunt libero at fringilla. Proin in gravida metus. Vivamus in ultrices magna. Integer  vitae molestie erat. Vestibulum nulla urna, pellentesque nec est et, tincidunt consectetur ligula. In placerat felis a mauris venenatis, a dapibus sapien finibus. Suspendisse fringilla tempus magna eu pulvinar. Vestibulum pharetra diam eu nunc porta molestie. Nunc quam metus, dictum ut vehicula nec, vestibulum a justo. Cras in tincidunt eros. Phasellus placerat mauris elit, eget vulputate risus imperdiet ut. Ut dapibus turpis interdum, lobortis diam sed, gravida lorem. Integer dignissim pretium elementum. Morbi fermentum aliquet augue eget placerat. Morbi ut justo aliquet, tempor risus nec, fermentum diam. Nulla semper posuere erat, eu semper dolor egestas ac. Duis pretium mattis purus, id congue arcu lobortis"

let breadImage = document.createElement("img");
breadImage.src = bread;

let firstRow = document.createElement("div");
let secondRow = document.createElement("div");


document.getElementById("content").appendChild(homeHeader);
document.getElementById("content").appendChild(firstRow);
document.getElementById("content").appendChild(secondRow);

firstRow.appendChild(breadImage);
firstRow.appendChild(pageContentOne);
secondRow.appendChild(pageContentTwo);