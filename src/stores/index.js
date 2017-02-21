/**
 * Created by dr2009 on 2017/2/21.
 */
import {observable, action, computed, useStrict} from 'mobx';

useStrict(true);

class Store {
    @observable counter = {
        count: 110
    };

    @action increment() {
        this.counter.count++;
    }

    @action decrement() {
        this.counter.count--;
    }

}

export default new Store();