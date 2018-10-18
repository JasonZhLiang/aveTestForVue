import Vue from 'vue';
import test from 'ava';
import Notification from '../src/Notification';//since ava allow to use es2015 syntax but not allow to apply any source file imported, so we need install babel-register plugin

test('that it render a notification', t=>{
    t.is(Notification.data().message,'Hello World');
});