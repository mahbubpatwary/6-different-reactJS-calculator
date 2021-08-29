import { Provider } from 'react-redux';
import store from './store';




const Redux = (props) => {


    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};

export default Redux;