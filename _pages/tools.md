---
layout: archive
title: "Tools"
permalink: /tools/
author_profile: true
---


<img src="../images/slicer4j_logo.png"
width="256"
height="256"
style="display: block; margin: 0 auto"> 

Slicer4J is an accurate, low-overhead dynamic slicer for Java programs. Slicer4J automatically generates a backward dynamic slice from a user selected executed statement and variables used in the statement (slicing criterion). Slicer4J relies on soot which currently supports instrumenting programs compiled with up to Java 9. Slicer4J is hosted on [github](https://github.com/resess/Slicer4J), contributions to the tool are most welcome!

If you use this tool, please cite:

**Khaled Ahmed**, Mieszko Lis, and Julia Rubin. [Slicer4J: A Dynamic Slicer For Java.](https://people.ece.ubc.ca/mjulia/publications/Slicer4J_2021.pdf) ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE), tools track, 2021 <[Code](https://github.com/resess/Slicer4J), [Video](https://youtu.be/mn7z6I-WyH4)>



<img src="../images/mandoline_Logo.png"
width="256"
height="256"
style="display: block; margin: 0 auto"> 

Mandoline is an an accurate, low-overhead dynamic slicer for Android. Mandoline automatically generates a backward dynamic slice from a user selected executed statement and variables used in the statement. Mandoline first creates an Inter-Callback Dependency Graph (ICDG) from an execution trace. The user selects a node in the ICDG and used variables in the node to start slicing from (slicing criterion). Mandoline is the first dynamic slicer for Android apps that accounts for data flows through fields and framework methods.
Mandoline is hosted on [github](https://github.com/resess/Mandoline), contributions to the tool are most welcome!

The repository also hosts the ground truth that Mandoline is evaluated on. The ground truth consists of manually generated slices of 12 applications.

If you use this tool, please cite:

**Khaled Ahmed**, Mieszko Lis, and Julia Rubin. [MANDOLINE: Dynamic Slicing of Android Applications with Trace-Based Alias Analysis.](https://www.ece.ubc.ca/~mjulia/publications/Mandoline_2021.pdf) IEEE International Conference on Software Testing, Verification and Validation (ICST), **Distinguished Paper Award**, 2021 (28% acceptance rate) <[Code](https://github.com/resess/Mandoline), [Slides](../files/ICST_flat_animation.pdf), [Video](https://www.youtube.com/watch?v=hHSEy6EcdsA)>

