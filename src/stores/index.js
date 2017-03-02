/**
 * Created by dr2009 on 2017/2/21.
 */
import {observable, action, computed, useStrict} from 'mobx';

useStrict(true);

class Store {
    @observable
    count = 110;

    @action
    increment() {
        this.count++;
    }

    @action
    decrement() {
        this.count--;
    }

}

export default new Store();