import { writable } from 'svelte/store';
import { Document } from './model/Document';
import { browser } from "$app/environment";
import { Shape, Vector } from './model/Geometry';

const darkTheme = writable(false);
export { darkTheme };
 
const initialFiles = [
    new Document("C:\\Users\\user\\Documents\\test.txt", "test.txt", "This is a test file.", true),
    new Document("C:\\Users\\user\\Documents\\test2.txt", "test2.txt", "Why do you need so many tests?", true),
    new Document("C:\\Users\\user\\Documents\\test3.txt", "test3.txt", "lorem ipsum", false),
    new Document("C:\\Users\\user\\Documents\\test4.txt", "test4.txt", "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", false),
  ]
  
export const files = writable(initialFiles)

// create 4 Shapes
const initialShapes: Shape[] = [
    {
        location: new Vector(0, 123),
        width: 100,
        height: 50,
        title: 'Box 1'
    },
    {
        location: new Vector(200, 333),
        width: 250,
        height: 50,
        title: 'This is a very long title'
    },
    {
        location: new Vector(100, 211),
        width: 100,
        height: 50,
        title: 'Box 3'
    },
    {
        location: new Vector(50, 11),
        width: 50,
        height: 50
    }
];
const initialConnections = [
    { from: 0, to: 1, hasArrow: true , bidirectional: true},
    { from: 1, to: 2, hasArrow: true , bidirectional: false },
    { from: 2, to: 3, hasArrow: false , bidirectional: true }
];

export const shapes = writable(initialShapes);
export const connections = writable(initialConnections);


