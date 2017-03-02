/**
 * Created by dr2009 on 2017/2/21.
 */
import {observable, action, computed, useStrict} from 'mobx';

useStrict(true);

class Store {
    @observable
    count = 0;

    @computed
    get restCount() {
        return 100 - this.count
    }

    @computed
    get totalCount() {
        return this.count + this.restCount
    }

    @action.bound
    increment() {
        this.count++;
    }

    @action.bound
    decrement() {
        this.count--;
    }

}

export default new Store();