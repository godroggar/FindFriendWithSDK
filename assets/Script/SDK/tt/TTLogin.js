
import LoginInterface from "../base/LoginInterface";
export default class TTLogin extends LoginInterface {

    constructor() {
        super()
    }



    login(func,param) {
        tt.login({
            force: false,
            success(res) {
                console.log(`login调用成功${res.code} ${res.anonymousCode}`);
                tt.getUserInfo({
                    success(res) {
                        console.log(`getUserInfo调用成功${res.userInfo}`);
                        func();
                    },
                    fail(res) {
                        console.log(`getUserInfo调用失败`);
                        func();
                    }
                });

            },
            fail(res) {
                func();
                // console.log(`login调用失败`);
            }
        });

    }



    logout() {

    }


}
