SF Lab 03: Slider
==================================================================
TO DO:

- Mobile version of the slider.

## DONE

***index_simple.html***

- A simple version of the slider with less code.
- Toggle between projects with arrows, dots and navigation titles.
- Slider settings are partially pre-set in HTML.
- Settings optimized for three projects only.
- Uses innerHTML.
- No autoplay.

***index_slideshow.html***

- Slideshow version of the page with customizable autoplay.
- As the page is loaded, the JS script inserts images, titles and descriptions from an array of Projects.
- Several extra projects could be loaded, requiring some minor tweaks to the navigation panels.
- Navigation toggles between the images and sets of texts using opacity.
- Autoplay can be switched on and off using the play button above the images.
- JS file includes the following autoplay options: 
> *pause:* Whether or not the slideshow is active when page loaded (false by default)
> *playInterval:* How fast the slides are changing (in milliseconds, 2000 by default)
- innerHTML replaced with appendChild in the code as a practice challenge (faster loading times).

## TASK

- Navigation via arrows. Slides must loop back to no.1 after no.3.
- Dots between the arrows must select the corresponding slide.
- Links above the slider must toggle between the slides.