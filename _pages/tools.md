---
layout: archive
title: ""
permalink: /tools/
author_profile: true
---

# ViaLin: Path-Aware Dynamic Taint Analysis for Android


<img src="../images/vialin.png"
width="160"
height="220"
style="display: block; margin: 0 auto">

Dynamic taint analysis – a program analysis technique that checks whether information flows between particular source and sink locations in the program, has numerous applications in security, program comprehension, and software testing. Specifically, in mobile software, taint analysis is often used to determine whether mobile apps contain stealthy behaviors that leak user-sensitive information to unauthorized third-party servers. While a number of dynamic taint analysis techniques for Android software have been recently proposed, none of them is able to report the complete information propagation path, only reporting flow endpoints, i.e., sources and sinks of the detected information flows. This design optimizes for runtime performance and allows the techniques to run efficiently on a mobile device. Yet, it impedes the applicability and usefulness of the techniques: an analyst using the tool would need to manually identify information propagation paths, e.g., to determine whether appropriate sanitization occurred before the information is released, which is a challenging task in large real-world applications.
In this paper, we address this problem by proposing a dynamic taint analysis technique that reports accurate taint propagation paths. We implement it in a tool, ViaLin, and evaluate it on a set of existing benchmark applications and on 16 large Android applications from the Google Play store. Our evaluation shows that ViaLin accurately detects taint flow paths and, at the same time, is able to run on a mobile device with a relatively low time and memory overhead.

You can read ViaLin's paper [here](https://people.ece.ubc.ca/mjulia/publications/ViaLin_FSE2023.pdf) and access the online appendix [here](https://resess.github.io/artifacts/ViaLin/).

The code and benchmarks are hosted on [github](https://github.com/resess/ViaLin), contributions to the tool are most welcome!


If you use this tool, please cite:

**Khaled Ahmed**, Yingying Wang, Mieszko Lis, and Julia Rubin. ViaLin: Path-Aware Dynamic Taint Analysis for Android. The ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (FSE), 2023 (26% acceptance rate). [[pdf](https://people.ece.ubc.ca/mjulia/publications/ViaLin_FSE2023.pdf), [bibtex](https://resess.github.io/artifacts/ViaLin/data/vialin.bib)]

---

# Slicer4J: A Dynamic Slicer for Java


<img src="../images/slicer4j_logo.png"
width="256"
height="256"
style="display: block; margin: 0 auto">

Slicer4J is an accurate, low-overhead dynamic slicer for Java programs. Slicer4J automatically generates a backward dynamic slice from a user selected executed statement and variables used in the statement (slicing criterion). Slicer4J relies on soot which currently supports instrumenting programs compiled with up to Java 9. Slicer4J is hosted on [github](https://github.com/resess/Slicer4J), contributions to the tool are most welcome!

If you use this tool, please cite:

**Khaled Ahmed**, Mieszko Lis, and Julia Rubin. [Slicer4J: A Dynamic Slicer for Java.](https://people.ece.ubc.ca/mjulia/publications/Slicer4J_2021.pdf) ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE), tools track, 2021 <[Code](https://github.com/resess/Slicer4J), [Video](https://youtu.be/mn7z6I-WyH4)>

---

# Mandoline: Dynamic Slicing of Android Applications with Trace-Based Alias Analysis

<img src="../images/mandoline_Logo.png"
width="256"
height="256"
style="display: block; margin: 0 auto">

Mandoline is an an accurate, low-overhead dynamic slicer for Android. Mandoline automatically generates a backward dynamic slice from a user selected executed statement and variables used in the statement. Mandoline first creates an Inter-Callback Dependency Graph (ICDG) from an execution trace. The user selects a node in the ICDG and used variables in the node to start slicing from (slicing criterion). Mandoline is the first dynamic slicer for Android apps that accounts for data flows through fields and framework methods.
Mandoline is hosted on [github](https://github.com/resess/Mandoline), contributions to the tool are most welcome!

The repository also hosts the ground truth that Mandoline is evaluated on. The ground truth consists of manually generated slices of 12 applications.

If you use this tool, please cite:

**Khaled Ahmed**, Mieszko Lis, and Julia Rubin. [MANDOLINE: Dynamic Slicing of Android Applications with Trace-Based Alias Analysis.](https://www.ece.ubc.ca/~mjulia/publications/Mandoline_2021.pdf) IEEE International Conference on Software Testing, Verification and Validation (ICST), **Distinguished Paper Award**, 2021 (28% acceptance rate) <[Code](https://github.com/resess/Mandoline), [Slides](../files/ICST_flat_animation.pdf), [Video](https://www.youtube.com/watch?v=hHSEy6EcdsA)>

