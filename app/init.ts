

import { Factory } from './factory';

var select: HTMLElement = <HTMLElement>document.getElementsByTagName("select")[0];
var factory = new Factory();
var obj = factory.create(select);