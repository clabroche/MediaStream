import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

/**
 * Duration of all animations
 */
const duration = '0.7s';
/**
 * Describe the animation curve
 */
const timingFunction = " ease-in-out";
/**
 * Animation that slide components to the right
 */
const next = [
  query(':enter, :leave', style({ position: 'fixed', width:'100%', 'height':"100vh" }), { optional: true }),
  group([
    query(":enter", [
                      style({ transform: "translateX(100%)" }),
                      animate(duration + " " + timingFunction, style({ transform: "translateX(0%)" }))
                    ], { optional: true }),
    query(":leave", [
                      style({ transform: "translateX(0%)" }),
                      animate(duration + " " + timingFunction, style({ transform: "translateX(-100%)" })) 
                    ], { optional: true })
  ])
]

/**
 * Animation that slide components to the right
 */
const previous = [
  query(':enter, :leave', style({ position: 'fixed', width:'100%', 'height':"100vh" }), { optional: true }),
  group([
    query(":enter", [
                      style({ transform: "translateX(-100%)" }),
                      animate(duration + " " + timingFunction, style({ transform: "translateX(0%)" }))
                    ], { optional: true }),
    query(":leave", [
                      style({ transform: "translateX(0%)" }),
                      animate(duration + " " + timingFunction, style({ transform: "translateX(100%)" }))
                    ], { optional: true })
  ])
]

/**
 * Animation that move away a component to let an other enter 
 */
const reset = [
  query(':enter, :leave', style({ position: 'fixed', width:'100%', 'height':"100vh" }), { optional: true }),
  query(':leave', style({ transform: "translateX(0%)" }), { optional: true }),
  query(':enter', style({ transform: "translateX(100%)" }), { optional: true }),
  query(":leave", [
                    style({ transform: "translateX(0%)" }),
                    animate(duration + " " + timingFunction, style({ transform: "translateX(100%)" }))
                  ], { optional: true }),
  query(":enter", [
                    style({ transform: "translateX(100%)" }),
                    animate(duration + " " + timingFunction, style({ transform: "translateX(0%)" }))
                  ], { optional: true }),
]

/**
 * Trigger all routes changement of the router and apply right animation between routes
 */
export const routerTransition = trigger("routerTransition", [
         transition("* => home", reset),
         transition("* => settings", reset),
         transition("* => profilePage", reset),
       ]);

