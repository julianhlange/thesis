var x1RandomArray = [];
var x2RandomArray = [];
var yRandomArray = [];
var startHeight, rowHeight, laneOffset, perspective;
var distanceToStart, courseLength, gap;
beginning1, end1, beginning2, end2, beginning3, end3, beginning4, end4;
var splitstart, splitint1, splitint2, splitint3;
var austria, usa, germany, italy, canada, russia;
var beginnings = [];
var ends = [];
var splits = [];
var names = [];
var data = [];
var images = [];


function setup() {
    createCanvas(7000, 1005);
    x1RandomArray = (length, max) => [...new Array(100)].map(() => Math.round(Math.random() * 1365));
    x2RandomArray = (length, max) => [...new Array(100)].map(() => Math.round(Math.random() * 1365));
    yRandomArray = (length, max) => [...new Array(100)].map(() => Math.round(Math.random() * (startHeight + 8 * rowHeight)));
    startHeight = 200
    rowHeight = 50
    laneOffset = 10
    perspective = 0
    distanceToStart = 100
    courseLength = 1365;
    gap = 300
    beginning1 = distanceToStart;
    end1 = beginning1 + courseLength
    beginning2 = end1 + gap
    end2 = beginning2 + courseLength
    beginning3 = end2 + gap
    end3 = beginning3 + courseLength
    beginning4 = end3 + gap
    end4 = beginning4 + courseLength
    splitstart = 30
    splitint1 = 270
    splitint2 = 625
    splitint3 = 1000
    beginnings = [beginning1, beginning2, beginning3, beginning4]
    ends = [end1, end2, end3, end4]
    splits = [splitstart, splitint1, splitint2, splitint3]
    names = ["DAVID GLEIRSCHER", "CHRIS MAZDZER", "JOHANNES LUDWIG", "DOMINIK FISCHNALLER", "FELIX LOCH", "SAM EDNEY", "KEVIN FISCHNALLER", "ROMAN REPILOV"]
    data = [DG, CM, JL, DF, FL, SE, KF, RR];
    austria = loadImage("flags/austria.png")
    usa = loadImage("flags/united-states-of-america.png")
    germany = loadImage("flags/germany.png")
    italy = loadImage("flags/italy.png")
    canada = loadImage("flags/canada.png")
    russia = loadImage("flags/russia.png")
    images = [austria, usa, germany, italy, germany, canada, italy, russia]
}

function draw() {
    translate(-frameCount * 4, 0)
    scale(3, 1)
    background(255)

    // 8 blue quads per run
    noStroke()
    fill(color('rgba(207, 249, 248, 0.5)'));
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            quad(beginnings[i] + (8 - j) * laneOffset, startHeight + j * rowHeight + j * perspective, ends[i] + (8 - j) * laneOffset, startHeight + j * rowHeight + j * perspective, ends[i] + (7 - j) * laneOffset, startHeight + (j + 1) * rowHeight + j * perspective, beginnings[i] + (7 - j) * laneOffset, startHeight + (j + 1) * rowHeight + j * perspective)
        }
    }
    // noStroke()
    // fill(color('rgba(255, 255, 255, 0.5)'));
    // for(i = 0; i < 4; i++) {
    //     for(j = 1; j < 9; j++) {
    //         quad(beginnings[i]+(8-j)*laneOffset, startHeight+j*rowHeight+rowHeight/5, ends[i]+(8-j)*laneOffset, startHeight+j*rowHeight+rowHeight/5, ends[i]+(7-j)*laneOffset,  startHeight+(j+1)*rowHeight-rowHeight/5, beginnings[i]+(7-j)*laneOffset, startHeight+(j+1)*rowHeight-rowHeight/5)
    //      }
    // }

    // // white lines to make it look icy
    // stroke("white")
    // strokeWeight(4);
    // for(i = 0; i < 4; i++) {
    //     for(j = 0; j < randomArrayX1.length; j++) {
    //         line(beginnings[i]+8*laneOffset+x1RandomArray[j], yRandomArray[j], beginnings[i]+8*laneOffset+x2RandomArray[j], yRandomArray[j])
    //     }
    // }

    // 3 split time lines per run (don't include start)
    stroke(color('rgba(100, 100, 100, 0.3)'));
    strokeWeight(4);
    for (i = 0; i < 4; i++) {
        for (j = 1; j < splits.length; j++) {
            line(beginnings[i] + splits[j] + 8 * laneOffset, startHeight, beginnings[i] + splits[j], startHeight + 8 * rowHeight)
        }
    }


    // start and finish lines per run

    // 2 thick horizontal lines per run
    stroke(100);
    strokeWeight(5);
    for (i = 0; i < 4; i++) {
        line(beginnings[i] + 8 * laneOffset, startHeight, ends[i] + 8 * laneOffset + ((0 + 1 + 2 + 3 + 4 + 5 + 6 + 7) * perspective), startHeight)
        line(beginnings[i], startHeight + 8 * rowHeight, ends[i] + ((0 + 1 + 2 + 3 + 4 + 5 + 6 + 7) * perspective), startHeight + 8 * rowHeight)
    }

    // 7 thin horizontal lines per 4 runs
    strokeWeight(1);
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            line(beginnings[i] + 8 * laneOffset - j * laneOffset, startHeight + j * rowHeight + j * perspective, ends[i] + 8 * laneOffset - j * laneOffset, startHeight + j * rowHeight + j * perspective)
        }
    }

    // flags for each country (might be too high res, try with lower res pngs)
    // tint(255, 150);
    // for(i = 0; i < 4; i++) {
    //     for(j = 0; j < images.length; j++) {
    //         image(images[j], beginnings[i]+20, (startHeight+j*rowHeight), images[j].width/10, images[j].height/10)
    //     }
    // }


    // moving line
    stroke("red");
    strokeWeight(5);
    line(DG[frameCount] + distanceToStart + 100, startHeight, DG[frameCount] + distanceToStart + 20, startHeight + 8 * rowHeight)

    textFont("Noto Sans");
    textStyle(ITALIC);
    fill(color('rgba(38, 21, 255, 0.2)'));
    noStroke();
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            textSize(rowHeight / 2.5);
            text(names[j], beginnings[i] + 90 - j * laneOffset, startHeight + j * rowHeight + rowHeight * 2 / 3)
        }
    }

    fill(50)
    var ellipseWidth = 2
    var ellipseheight = 4
    for (i = 0; i < data.length; i++) {
        ellipse(data[i][frameCount] + distanceToStart + 8 * laneOffset - i * laneOffset - ellipseWidth / 2, startHeight + i * rowHeight + rowHeight / 2 + ellipseheight / 2, ellipseWidth, ellipseheight)
    }
}
