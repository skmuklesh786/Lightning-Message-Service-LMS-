import { LightningElement,wire } from 'lwc';
import {publish,MessageContext} from'lightning/messageService';
import abcd from'@salesforce/messageChannel/lmsoct02__c';

export default class Publishcom extends LightningElement {
@wire(MessageContext)
messageContext; 

handleClick(){
    //alert('button click');
const payload={

    operator:'add',
    constant:1
};

publish(this.messageContext, abcd,payload);
		 

}


}
