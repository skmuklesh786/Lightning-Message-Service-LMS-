//Subcribe Component:component Name Subcribe.js

import { LightningElement,wire } from 'lwc';
import {subscribe,MessageContext} from'lightning/messageService';
import abcd from '@salesforce/messageChannel/lmsoct02__c';
export default class Subtestsep extends LightningElement {

count=0;
subscription=null;

@wire(MessageContext)
messageContext;

connectedCallback() {
    // alert('relation created');
this.subscribeToMessageChannel();

}
subscribeToMessageChannel(){
this.subscription=subscribe(
    this.messageContext,
    abcd,
    (message)=>this.han(message)


);
}
han(message){
 alert('the message data is '+JSON.stringify(message));
//  console.log(JSON.stringify(message).count);
    this.count+=message.constant;
     console.log(this.count);
}
}


