//What is event bubbling

When an event happens on an element, it first runs the element itself, then on its parent, then all the way up on other ancestors. As the name suggest, event is bubbling up.

for example:

<div className="grandParent">
    <div class="parent">
        <div class="child"></div>
    </div>
</div>

when we click on the child div, it first capture the child div, then parent div and then grandparent div.
But when we click on the grandparent div, it capture only grandparent div because it is going towards up direction and grandparent is the topmost element.


// What is event capturing

Event capturing is opposite of event bubbling i.e it captures the events in downword direction.
Also, by default event bubbling will occur but to activate event capturing we need to pass the third argument as true along with the callback function of any event.

for example:

<div className="grandParent">
    <div class="parent">
        <div class="child"></div>
    </div>
</div>

$(".child").on('click', function (e) {
        alert(e.target.value);
}, true)


the above example will only capture the third click event.

to understand in depth kindly visit the below url:

https://javascript.info/bubbling-and-capturing


//What is event delegation?

The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

In the handler we get event.target to see where the event actually happened and handle it.


//What is event propagation?

When you click the button in the following HTML:

On how many elements a click event gets triggered? Without a doubt, the button itself receives a click event. But also... all button's ancestors and even the document and window objects.

A click event propagates in 3 phases:

Capture phase — Starting from window, document and the root element, the event dives down through ancestors of the target element
Target phase — The event gets triggered on the element on which the user has clicked
Bubble phase — Finally, the event bubbles up through ancestors of the target element until the root element, document, and window.