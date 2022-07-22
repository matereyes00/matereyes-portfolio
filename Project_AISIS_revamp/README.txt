For my Guided Studies in Web Accessibiliy class, I was tasked to improve on the Ateneo Integrated Student Information System website using the topics and lessons we were taught in the class. In the final project, I used HTML and CSS. Additionally, Bootstrap was used to make the entire site design and layout more consistent.

The curriculum of the class follows the WCAG (Web Content Accessibility Guidelines). We learned how a website can be accessible in 4 different ways: 
a.) Perceivable 
b.) Operable
c.) Understandable 
d.) Robust

Using these criteria, we needed to pinpoint current features of AISIS that do not comply with WCAG standards and tweak/modify/re-engineer completely.

My redesign of AISIS follows a minimal yet functional approach. I stayed true to the original layout and design, but added a lot of functionality to the existing features, to tailor towards those with disabilities and to make the site more readable in general. 

1. Color Scheme / Aesthetics: the original colors of AISIS made reading the site difficult. The contrast of the colors did not pass the color contrast checker. So I had to tweak the colors slightly and create a palette that would ease the user as they navigate their way through the site. I also added spacing between the characters and boxes for the user to read the text located in boxes easier.
2. Better Navigation: In the original design of AISIS, it did not have a very good navigation system and it is not made obvious which page of the site the user is on. I added a breadcrumb system at the top of every page so that the user is aware which page they are on, to navigate through the site with comfort.
3. Narrator/Text-to-speech friendly: Using the WAI-ARIA functionality, using text to speech is now made possible with this variation of AISIS.
4. Form spans accross different pages: In Updating the student Information form, it is less tedious now, for the form isn't located on just one page. Students find it long and daunting to fill up a form that's just one page, so I decided to split the form on different pages to make it less tedious. The form is made more accessible through the emphasis of what part of the textbox or button the user is on, for keyboard users.
5. Are you sure?: A lot of the forms the user needs to fill and submit on AISIS do not confirm or ask the user if they want to push through with submitting the form. To make this more user friendly, I added a pop up box, each time a user has to submit a form, in case they change their minds.