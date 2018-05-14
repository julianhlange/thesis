var myCanvas;
var startHeight, rowHeight, laneOffset;
var distanceToStart, courseLength, gap, beginning1, end1, beginning2, end2, beginning3, end3, beginning4, end4;
var splitstart, splitint1, splitint2, splitint3;
var beginnings = [];
var ends = [];
var splits = [];
var splitFlash = [];
var names = [];
var data = [];
var images = [];
var trackPadding;
var farWallHeight, nearWallHeight;
var wallWidth;
var wallDepth;
var wallLengthen;
var trackThickness;
var xText, yText;
var run = false;
var splitMarkers = [];
var runs = [];
var startStopLineThickness;
var flagWidth;
var flagHeight;

// function preload() {
//     austria = loadImage("assets/flags/austria.png");
//     usa = loadImage("assets/flags/united-states-of-america.png")
//     germany = loadImage("assets/flags/germany.png")
//     italy = loadImage("assets/flags/italy.png")
//     canada = loadImage("assets/flags/canada.png")
//     russia = loadImage("assets/flags/russia.png")
//     images = [austria, usa, germany, italy, germany, canada, italy, russia]
// }

function setup() {
    myCanvas = createCanvas(3600, 505);
    myCanvas.parent("container");
    angleMode(DEGREES);
    startHeight = 120
    rowHeight = 40
    laneOffset = 10
    distanceToStart = 80
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
    splitFlash = [173, 380, 635, 973, 1180, 1435, 1783, 1990, 2240, 2583, 2790, 3045]
    names = ["DAVID GLEIRSCHER", "CHRIS MAZDZER", "JOHANNES LUDWIG", "DOMINIK FISCHNALLER", "FELIX LOCH", "SAM EDNEY", "KEVIN FISCHNALLER", "ROMAN REPILOV"]
    data = [DG, CM, JL, DF, FL, SE, KF, RR];
    xText = 20;
    yText = 20;
    trackPadding = 50
    farWallHeight = 16;
    nearWallHeight = 50;
    wallWidth = 10;
    wallDepth = 2;
    wallLengthen = 5;
    trackThickness = 30;
    for(i = 0; i < beginnings.length; i++) {
        for(j = 1; j < splits.length; j++)
        splitMarkers.push(beginnings[i]+splits[j])
    }
    runs = ["RUN 1", "RUN 2", "RUN 3", "RUN 4"];
    startStopLineThickness = 10
    flagWidth = 30;
    flagHeight = 27;
}

function startRun() {
    frameRate(60)
    run = true
}

function draw() {
    background(255)
    if(!run) { frameRate(0) }
    if(run) { frameRate(60) }
    
    scale(1,1)
    textFont("AvenirNextCondensed-Medium");
    textStyle(NORMAL);
    textAlign(LEFT);
    fill(50);
    textSize(14);
    if(frameCount > floor(48/5*60) & frameCount < 1000) { text("test", 1400-4*(frameCount-floor(48/5*60)), 50) };

    scale(2, 1)
    if(frameCount > 150 & frameCount < 3100) { translate((-frameCount+150) * 2, 0) }
    if(frameCount >= 3100) { translate((-3100+150) * 2, 0) }
    // if(frameCount > 150 && frameCount <= 600) { translate((-frameCount+150) * 2, 0) }
    // if(frameCount > 600) { translate(-900, 0) }
    // if(frameCount > 900 && frameCount <= 1500) { translate((-frameCount+750) * 2, 0) }
    // else if(frameCount > 600 && frameCount < 700) { translate(600, 0) }
    // translate(-frameCount * 1.7  , 0)


    //////////////////// far wall ////////////////////
    for (i = 0; i < 4; i++) {
        fill(100);
        noStroke()
        // side
        rect(beginnings[i] + 8 * laneOffset - trackPadding - wallLengthen,         startHeight-farWallHeight,          courseLength + 2*trackPadding + 2*wallLengthen,          nearWallHeight)
        // top
        quad(beginnings[i] + 8 * laneOffset - trackPadding + wallDepth - wallLengthen,                                      startHeight-farWallHeight - wallWidth/2,
            beginnings[i] + 8 * laneOffset - trackPadding + wallDepth/2 + courseLength + 2*trackPadding + wallLengthen,       startHeight-farWallHeight - wallWidth/2,
            beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen,                   startHeight-farWallHeight,
            beginnings[i] + 8 * laneOffset - trackPadding - wallLengthen,                                                   startHeight-farWallHeight)
        // lines
        stroke(255);
        strokeWeight(1);
        line(beginnings[i] + 8 * laneOffset - trackPadding - wallLengthen, startHeight-farWallHeight, ends[i] + 8 * laneOffset + trackPadding + wallLengthen, startHeight-farWallHeight)
        // end
        fill(100);
        noStroke()
        quad(beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen,                  startHeight-farWallHeight,
            beginnings[i] + 8 * laneOffset - trackPadding + wallDepth/1.5 + courseLength + 2*trackPadding + wallLengthen,       startHeight-farWallHeight - wallWidth/2,
            beginnings[i] + 8 * laneOffset - trackPadding + wallDepth/1.5 + courseLength + 2*trackPadding + wallLengthen,       startHeight-farWallHeight - wallWidth/2 + nearWallHeight,
            beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen,                   startHeight-farWallHeight + nearWallHeight)
        // lines
        stroke(255);
        strokeWeight(0.5);
        line(beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen, startHeight-farWallHeight, beginnings[i] + 8 * laneOffset - trackPadding + wallDepth + courseLength + 2*trackPadding + wallLengthen, startHeight-farWallHeight - wallWidth)
        line(beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen, startHeight-farWallHeight, beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen, startHeight-farWallHeight + nearWallHeight)
    }
    
    
    
    //////////////////// 8 blue quads per run and white patch down center ////////////////////
    // track thickness
    noStroke()
    fill(color('rgba(187, 229, 228, 1)'));
    for(i = 0; i < 4; i++) {
        beginShape();
        vertex(beginnings[i] + 8 * laneOffset - trackPadding, startHeight);
        vertex(ends[i] + 8 * laneOffset + trackPadding, startHeight);
        vertex(ends[i] + 8 * laneOffset + trackPadding, startHeight + trackThickness);
        vertex(ends[i] + trackPadding, startHeight + 8 * rowHeight + trackThickness + 10);
        vertex(beginnings[i] - trackPadding, startHeight + 8 * rowHeight + trackThickness + 10);
        vertex(beginnings[i] - trackPadding, startHeight + 8 * rowHeight);
        endShape();
    }
    // blue quads
    noStroke()
    // white background to give pale look
    fill(color('rgba(255, 255, 255, 1)'));   
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            quad(beginnings[i] + (8 - j) * laneOffset - trackPadding, startHeight + j * rowHeight, ends[i] + (8 - j) * laneOffset + trackPadding, startHeight + j * rowHeight, ends[i] + (7 - j) * laneOffset + trackPadding, startHeight + (j + 1) * rowHeight, beginnings[i] + (7 - j) * laneOffset - trackPadding, startHeight + (j + 1) * rowHeight)
        }
    }
    // blue patches
    fill(color('rgba(207, 249, 248, 0.8)'));
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            quad(beginnings[i] + (8 - j) * laneOffset - trackPadding,   startHeight + j * rowHeight,
            ends[i] + (8 - j) * laneOffset + trackPadding,              startHeight + j * rowHeight,
            ends[i] + (7 - j) * laneOffset + trackPadding,              startHeight + (j + 1) * rowHeight,
            beginnings[i] + (7 - j) * laneOffset - trackPadding,        startHeight + (j + 1) * rowHeight)
        }
    }
    // white patch down center
    fill(color('rgba(255, 255, 255, 0.5)'));
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 8; j++) {
            quad(beginnings[i]+(8-j)*laneOffset - 2 - trackPadding,     startHeight+j*rowHeight + rowHeight/5,
            ends[i]+(8-j)*laneOffset - 2 + trackPadding,                startHeight+j*rowHeight + rowHeight/5,
            ends[i]+(7-j)*laneOffset + 2 + trackPadding,                startHeight+(j+1)*rowHeight - rowHeight/5,
            beginnings[i]+(7-j)*laneOffset - trackPadding,              startHeight+(j+1)*rowHeight - rowHeight/5)
         }
    }
    
    
    
    //////////////////// moving line ////////////////////
    if(frameCount > 20) {
        stroke(150);
        strokeWeight(0.5);
        line(FL[frameCount] + distanceToStart + 8*laneOffset, startHeight, FL[frameCount] + distanceToStart, startHeight + 8 * rowHeight)
    }

    // // white lines to make it look icy
    // stroke("white")
    // strokeWeight(4);
    // for(i = 0; i < 4; i++) {
    //     for(j = 0; j < randomArrayX1.length; j++) {
    //         line(beginnings[i]+8*laneOffset+x1RandomArray[j], yRandomArray[j], beginnings[i]+8*laneOffset+x2RandomArray[j], yRandomArray[j])
    //     }
    // }



    //////////////////// lines for split times, start and finish lines, side walls, and thin horizontal lines //////////////////// 

    // 3 split time lines per run (don't include start) and flash when cross
    stroke(color('rgba(100, 100, 100, 0.3)'));
    strokeWeight(6);
    for (i = 0; i < 4; i++) {
        for (j = 1; j < splits.length; j++) {
            line(beginnings[i] + splits[j] + 8 * laneOffset, startHeight, beginnings[i] + splits[j], startHeight + 8 * rowHeight)
        }
    }
    for(i = 0; i < splitMarkers.length; i++) {
        if(frameCount>(splitMarkers[i]-splitFlash[i])) { 
            stroke(color('rgba(255, 250, 205, 0.3)'));
            strokeWeight(6);
            line(splitMarkers[i] + 8 * laneOffset, startHeight, splitMarkers[i], startHeight + 8 * rowHeight)
        }
    }



    //////////////////// start and finish lines //////////////////// 
    for (i = 0; i < 4; i++) {
        strokeWeight(startStopLineThickness);
        stroke(color('rgba(0, 100, 0, 0.3)'));
        line(beginnings[i] + 8 * laneOffset, startHeight, beginnings[i], startHeight + 8 * rowHeight)
        stroke(color('rgba(255, 0, 0, 0.3)'));
        line(ends[i] + 8 * laneOffset, startHeight, ends[i], startHeight + 8 * rowHeight)
    }
    

    
    
    //////////////////// near wall ////////////////////
    for (i = 0; i < 4; i++) {
        fill(100);
        noStroke()
        // side
        rect(beginnings[i] - trackPadding - 4 - wallLengthen,          startHeight + 8 * rowHeight + wallWidth,            courseLength + 2*trackPadding + 2*wallLengthen,          nearWallHeight)
        // top
        quad(beginnings[i] - trackPadding - 3 +  wallDepth - wallLengthen,                                  startHeight + 8 * rowHeight,
            beginnings[i] - trackPadding -4 + wallDepth + courseLength + 2*trackPadding + wallLengthen,     startHeight + 8 * rowHeight,
            beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen,                 startHeight + 8 * rowHeight + wallWidth,
            beginnings[i] - trackPadding - 4 - wallLengthen,                                                startHeight + 8 * rowHeight + wallWidth)
        // lines
        stroke(255);
        strokeWeight(1);
        line(beginnings[i] - trackPadding - 4 - wallLengthen, startHeight + 8 * rowHeight + wallWidth, ends[i] + trackPadding - 4 + wallLengthen, startHeight + 8 * rowHeight + wallWidth)
        

        // end
        fill(100);
        noStroke()
        quad(beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen,                startHeight + 8 * rowHeight + wallWidth,
            beginnings[i] - trackPadding -4 + wallDepth + courseLength + 2*trackPadding + wallLengthen,     startHeight + 8 * rowHeight,
            beginnings[i] - trackPadding -4 + wallDepth + courseLength + 2*trackPadding + wallLengthen,     startHeight + 8 * rowHeight + nearWallHeight,
            beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen,                 startHeight + 8 * rowHeight + wallWidth + nearWallHeight)
        // lines
        stroke(255);
        strokeWeight(0.5);
        line(beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen, startHeight + 8 * rowHeight + wallWidth, beginnings[i] - trackPadding -4 + wallDepth + courseLength + 2*trackPadding + wallLengthen, startHeight + 8 * rowHeight)
        line(beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen, startHeight + 8 * rowHeight + wallWidth, beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen, startHeight + 8 * rowHeight + wallWidth + nearWallHeight)
    }

    
    
    //////////////////// reinforced far wall ////////////////////
    fill(100);
    noStroke()
    for (i = 0; i < 4; i++) {
        rect(beginnings[i] + 8 * laneOffset - trackPadding,         startHeight-farWallHeight + 1,          courseLength + 2*trackPadding,          farWallHeight - 1)
    }



    //////////////////// athlete names text ////////////////////
    textFont("Noto Sans");
    textStyle(ITALIC);
    textAlign(LEFT);
    fill(color('rgba(38, 21, 255, 0.2)'));
    noStroke();
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            textSize(rowHeight / 3 + j/1.5);
            text(names[j], beginnings[i] + 90 - j * laneOffset + flagWidth + 5 + j, startHeight + j * rowHeight + rowHeight * 2 / 3)
        }
    }
    textAlign(RIGHT);
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            textSize(rowHeight / 3 + j/1.5);
            text(names[j], ends[i] + 90 - j * laneOffset - 35, startHeight + j * rowHeight + rowHeight * 2 / 3)
        }
    }
    if(frameCount >= 3160) {
        textAlign(RIGHT);
        fill(color('rgba(218, 165, 32, 0.5)'));
        for (i = 3; i < 4; i++) {
            for (j = 0; j < 1; j++) {
                textSize(rowHeight / 3 + j/1.5);
                text(names[j], ends[i] + 90 - j * laneOffset - 35, startHeight + j * rowHeight + rowHeight * 2 / 3)
            }
            fill(color('rgba(153, 153, 153, 0.5)'));
            for (j = 1; j < 2; j++) {
                textSize(rowHeight / 3 + j/1.5);
                text(names[j], ends[i] + 90 - j * laneOffset - 35, startHeight + j * rowHeight + rowHeight * 2 / 3)
            }
            fill(color('rgba(160, 82, 45, 0.5)'));
            for (j = 2; j < 3; j++) {
                textSize(rowHeight / 3 + j/1.5);
                text(names[j], ends[i] + 90 - j * laneOffset - 35, startHeight + j * rowHeight + rowHeight * 2 / 3)
            }
        }
    }
    
    
    //////////////////// run 1-4 text ////////////////////
    textFont("Noto Sans");
    textStyle(ITALIC);
    textAlign(CENTER);
    fill(color('rgba(38, 21, 255, 0.1)'));
    textSize(100)
    for (i = 0; i < 4; i++) {
        text(runs[i], beginnings[i] + 480, startHeight + 4.5 * rowHeight)
    }
    
    
    
    //////////////////// olympic logo ////////////////////
    textFont("Raleway");
    textAlign(CENTER);
    fill(color('rgba(62,118,236, 0.15)'));
    
    // center logo, text, and rings
    for (i = 0; i < 4; i++) {
        
        // blue bar and ring
        fill(color('rgba(62,118,236, 0.15)'));
        push();
        translate(beginnings[i] + splitint2 + (splitint3-splitint2)/4 + 25, startHeight)
        quad(50,                    1.2 * rowHeight,
            147,                    1.2 * rowHeight,
            147 - laneOffset*0.25,   1.5 * rowHeight,
            50 - laneOffset*0.25,    1.5 * rowHeight)
        textSize(80)
        text("o", 45, 6.3 * rowHeight)
        
        // black bar and ring
        fill(color('rgba(0,0,0, 0.15)'));
        quad(60,      1.6 * rowHeight,
            69,      1.6 * rowHeight,
            57 - laneOffset*0.25,  3.4 * rowHeight,
            47 - laneOffset*0.25,  3.4 * rowHeight)
        textSize(80)
        text("o", 90, 6.3 * rowHeight)
        
        // red bar and ring
        fill(color('rgba(255,0,0, 0.15)'));
        quad(32,      3.5 * rowHeight,
            129,      3.5 * rowHeight,
            129 - laneOffset*0.25,  3.85 * rowHeight,
            32 - laneOffset*0.25,  3.85 * rowHeight)
        textSize(80)
        text("o", 135, 6.3 * rowHeight)
        
        // yellow ring
        fill(color('rgba(255,206,1, 0.2)'));
        textSize(85)
        text("o", 62, 6.8 * rowHeight)
        
        // green bar and ring
        fill(color('rgba(23,154,19, 0.15)'));
        quad(125,      1.6 * rowHeight,
            134,      1.6 * rowHeight,
            122 - laneOffset*0.25,  3.4 * rowHeight,
            112 - laneOffset*0.25,  3.4 * rowHeight)
        textSize(85)
        text("o", 108, 6.8 * rowHeight)
        
        // pyeongchang text
        textSize(25)
        textFont("Global-Medium");
        fill(color('rgba(0,0,0, 0.15)'));
        text("PyeongChang 2018", 105, 4.7 * rowHeight)
        pop();
    }
    
    // top right star symbol
    for (i = 0; i < 4; i++) {
        push();
        translate(beginnings[i] + splitint2 + (splitint3-splitint2)/4 + 202, startHeight + 1.2*rowHeight)
        
        // black
        fill(color('rgba(0,0,0, 0.15)'));
        rotate(10);
        beginShape();
        vertex(0, 0);
        vertex(3, -4);
        vertex(3, -30);
        vertex(-3, -30)
        vertex(-3, -4)
        endShape()
        // green
        fill(color('rgba(23,154,19, 0.15)'));
        rotate(72);
        beginShape();
        vertex(0, 0);
        vertex(3, -4);
        vertex(3, -30);
        vertex(-3, -30)
        vertex(-3, -4)
        endShape()
        // blue
        fill(color('rgba(62,118,236, 0.15)'));
        rotate(72);
        beginShape();
        vertex(0, 0);
        vertex(3, -4);
        vertex(3, -30);
        vertex(-3, -30)
        vertex(-3, -4)
        endShape()
        // red
        fill(color('rgba(255,0,0, 0.15)'));
        rotate(72);
        beginShape();
        vertex(0, 0);
        vertex(3, -4);
        vertex(3, -30);
        vertex(-3, -30)
        vertex(-3, -4)
        endShape()
        // yellow
        fill(color('rgba(255,206,1, 0.2)'));
        rotate(72);
        beginShape();
        vertex(0, 0);
        vertex(3, -4);
        vertex(3, -30);
        vertex(-3, -30)
        vertex(-3, -4)
        endShape()
        pop();
    }
    
    
    // flags
    for (i = 0; i < 4; i++) {
        push();
        translate(beginnings[i] + trackPadding + 45, startHeight + 0.16*rowHeight)
        shearX(-14);
        
        // austria
        push();
        translate(0, 0*rowHeight)
        var flagWidthCountry = flagWidth - 2/2
        fill(color('rgba(237,41,57, 0.4)'));
        quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeight/3, 0, flagHeight/3)
        fill(color('rgba(240,240,240, 0.4)'));
        quad(0, flagHeight/3, flagWidthCountry, flagHeight/3, flagWidthCountry, 2*flagHeight/3, 0, 2*flagHeight/3)
        fill(color('rgba(237,41,57, 0.4)'));
        quad(0, 2*flagHeight/3, flagWidthCountry, 2*flagHeight/3, flagWidthCountry, 3*flagHeight/3, 0, 3*flagHeight/3)
        pop();
        
        // usa
        push();
        translate(0, 1*rowHeight)
        var flagWidthCountry = flagWidth - 1/2
        fill(color('rgba(191, 10, 48, 0.4)'));
        quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeight, 0, flagHeight)
        for(var k = 1; k < 12; k += 2) {
            fill(color('rgba(240,240,240, 0.8)'));
            quad(0, flagHeight/13*k, flagWidthCountry, flagHeight/13*k, flagWidthCountry, flagHeight/13*(k+1), 0, flagHeight/13*(k+1))
        }
        fill(color('rgba(255, 255, 255, 1)'));  // this and next line are just to cover background for blue to have opacity
        quad(0, 0, flagWidthCountry*10.4/26, 0, flagWidthCountry*10.4/26, flagHeight*7/13, 0, flagHeight*7/13)
        fill(color('rgba(0, 40, 104, 0.4)'));
        quad(0, 0, flagWidthCountry*10.4/26, 0, flagWidthCountry*10.4/26, flagHeight*7/13, 0, flagHeight*7/13)
        fill(color('rgba(240,240,240, 0.8)'));
        for(let m = 0; m < 7; m++) {
            for(let n = 0; n < 5; n++) {
                x = (flagWidthCountry*10.4/26)/8 + (flagWidthCountry*10.4/26)/8 * m
                y = (flagHeight*7/13)/6 + (flagHeight*7/13)/6 * n
                ellipse(x, y, 1, 1)
            }
        }
        pop();
        
        // germany
        push();
        translate(0, 2*rowHeight)
        var flagWidthCountry = flagWidth + 0/2
        fill(color('rgba(0,0,0, 0.4)'));
        quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeight/3, 0, flagHeight/3)
        fill(color('rgba(255,0,0, 0.4)'));
        quad(0, flagHeight/3, flagWidthCountry, flagHeight/3, flagWidthCountry, 2*flagHeight/3, 0, 2*flagHeight/3)
        fill(color('rgba(255,204,0, 0.4)'));
        quad(0, 2*flagHeight/3, flagWidthCountry, 2*flagHeight/3, flagWidthCountry, 3*flagHeight/3, 0, 3*flagHeight/3)
        pop();
        
        // italy
        push();
        translate(0, 3*rowHeight)
        var flagWidthCountry = flagWidth + 1/2
        fill(color('rgba(0,140,69, 0.4)'));
        quad(0, 0, flagWidthCountry/3, 0, flagWidthCountry/3, flagHeight, 0, flagHeight)
        fill(color('rgba(240,240,240, 0.4)'));
        quad(flagWidthCountry/3, 0, flagWidthCountry*2/3, 0, flagWidthCountry*2/3, flagHeight, flagWidthCountry/3, flagHeight)
        fill(color('rgba(205,33,42, 0.4)'));
        quad(flagWidthCountry*2/3, 0, flagWidthCountry, 0, flagWidthCountry, flagHeight, flagWidthCountry*2/3, flagHeight)
        pop();
        
        // germany
        push();
        translate(0, 4*rowHeight)
        var flagWidthCountry = flagWidth + 2/2
        fill(color('rgba(0,0,0, 0.4)'));
        quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeight/3, 0, flagHeight/3)
        fill(color('rgba(255,0,0, 0.4)'));
        quad(0, flagHeight/3, flagWidthCountry, flagHeight/3, flagWidthCountry, 2*flagHeight/3, 0, 2*flagHeight/3)
        fill(color('rgba(255,204,0, 0.4)'));
        quad(0, 2*flagHeight/3, flagWidthCountry, 2*flagHeight/3, flagWidthCountry, flagHeight, 0, flagHeight)
        pop();
        
        // canada
        push();
        translate(0, 5*rowHeight)
        var flagWidthCountry = flagWidth + 3/2
        fill(color('rgba(255,0,0, 0.4)'));
        quad(0, 0, flagWidthCountry/4, 0, flagWidthCountry/4, flagHeight, 0, flagHeight)
        fill(color('rgba(240,240,240, 0.4)'));
        quad(flagWidthCountry/4, 0, flagWidthCountry/4, 0, flagWidthCountry*3/4, flagHeight, flagWidthCountry*3/4, flagHeight)
        fill(color('rgba(255,0,0, 0.4)'));
        quad(flagWidthCountry*3/4, 0, flagWidthCountry, 0, flagWidthCountry, flagHeight, flagWidthCountry*3/4, flagHeight)
        fill(color('rgba(255,0,0, 0.4)'));
            push();
            translate(flagWidthCountry/2, flagHeight*2/3)
            beginShape()
                vertex(-flagWidthCountry/60, -flagHeight/20)
                vertex(-flagWidthCountry/8, 0)
                vertex(-flagWidthCountry/6, -flagHeight/8)
                vertex(-flagWidthCountry/8, -flagHeight/8*2)
                vertex(-flagWidthCountry/20, -flagHeight/8*2+flagWidthCountry/60)
                
                vertex(-flagWidthCountry/16, -flagHeight/3)
                vertex(0, -flagHeight/3-flagWidthCountry/8)
                vertex(flagWidthCountry/16, -flagHeight/3)
                
                vertex(flagWidthCountry/20, -flagHeight/8*2+flagWidthCountry/60)
                vertex(flagWidthCountry/8, -flagHeight/8*2)
                vertex(flagWidthCountry/6, -flagHeight/8)
                vertex(flagWidthCountry/8, -flagHeight/30)
                
                vertex(flagWidthCountry/60, -flagHeight/20)
                vertex(flagWidthCountry/60, flagHeight/6)
                vertex(-flagWidthCountry/60, flagHeight/6)
                
            endShape()
            pop();
        pop();
        
        // italy
        push();
        translate(0, 6*rowHeight)
        var flagWidthCountry = flagWidth + 4/2
        fill(color('rgba(0,140,69, 0.4)'));
        quad(0, 0, flagWidthCountry/3, 0, flagWidthCountry/3, flagHeight, 0, flagHeight)
        fill(color('rgba(240,240,240, 0.4)'));
        quad(flagWidthCountry/3, 0, flagWidthCountry*2/3, 0, flagWidthCountry*2/3, flagHeight, flagWidthCountry/3, flagHeight)
        fill(color('rgba(205,33,42, 0.4)'));
        quad(flagWidthCountry*2/3, 0, flagWidthCountry, 0, flagWidthCountry, flagHeight, flagWidthCountry*2/3, flagHeight)
        pop();
        
        // russia
        push();
        translate(0, 7*rowHeight)
        var flagWidthCountry = flagWidth + 5/2
        fill(color('rgba(240,240,240, 0.4)'));
        quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeight/3, 0, flagHeight/3)
        fill(color('rgba(0,57,166, 0.4)'));
        quad(0, flagHeight/3, flagWidthCountry, flagHeight/3, flagWidthCountry, 2*flagHeight/3, 0, 2*flagHeight/3)
        fill(color('rgba(213,43,30, 0.4)'));
        quad(0, 2*flagHeight/3, flagWidthCountry, 2*flagHeight/3, flagWidthCountry, flagHeight, 0, flagHeight)
        pop();
        
        pop();
    }



    //////////////////// 7 thin horizontal lines per run ////////////////////
    stroke(100);
    strokeWeight(1);
    for (i = 0; i < 4; i++) {
        for (j = 1; j < 8; j++) {
            line(beginnings[i] + 8 * laneOffset - j * laneOffset - startStopLineThickness/2, startHeight + j * rowHeight, ends[i] + 8 * laneOffset - j * laneOffset + startStopLineThickness/2 - 1, startHeight + j * rowHeight)
        }
    }



    //////////////////// luge sleds ////////////////////
    fill(50);
    noStroke();
    for (i = 0; i < data.length; i++) {
        var ellipseWidth = 10 + i/5
        var ellipseheight = 6 + i/5
        ellipse(data[i][frameCount] + distanceToStart + 8 * laneOffset - i * laneOffset - 1.5*ellipseWidth, startHeight + i * rowHeight + rowHeight / 2, ellipseWidth, ellipseheight)
    }



    //////////////////// ice spray ////////////////////
    for(i = 0; i < data.length; i++) {
        for(k = 0; k < 10; k++) {
            x = data[i][frameCount] + distanceToStart + 8 * laneOffset - i * laneOffset - random(25,45)
            y =  startHeight+i*rowHeight + rowHeight/3 + random(10)
            noStroke();
            fill(240)
            ellipse(x, y, 1, 1)
        }
    }
    
}






