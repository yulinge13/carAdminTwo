import {
    httpGet,
    httpPost
} from './axios'
const handleHttp = (res) => {
    return new Promise((reslove, reject) => {
        reslove(res)
    })
}
const httpLists = {
    containHttp: {
        //获取菜单
        async getMenuLists() {
            const res = await httpGet({
                url: '/getMenuLists',
                data: {}
            })
            return handleHttp(res)
        },
        //获取所有的商品
        async getAllProduct(data) {
            const res = await httpGet({
                url: '/findLists',
                data: {
                    ...data
                }
            })
            return handleHttp(res)
        },
        //获取所有的分类
        async getAllClass(data) {
            const res = await httpGet({
                url: '/getClass',
                data
            })
            return handleHttp(res)
        },
        //添加分类
        async addClass(data) {
            console.log(data)
            const res = await httpPost({
                url: '/addClass',
                data
            })
            return handleHttp(res)
        },
        //获取一级分类
        async getFirstClass() {
            const res = await httpGet({
                url: '/getFirstClass',
                data: {}
            })
            return handleHttp(res)
        },
        //添加商品
        async addProduct(data) {
            const res = await httpPost({
                url: '/addProduct',
                data
            })
            return handleHttp(res)
        },
        //删除商品
        async removeList(id) {
            const res = await httpPost({
                url: '/removeProduct',
                data: {
                    id
                }
            })
            return handleHttp(res)
        },
        //用户注册
        async addUserInfo(data) {
            const res = await httpPost({
                url: '/addUserInfo',
                data
            })
            return handleHttp(res)
        },
        //用户登陆
        async login(data) {
            const res = await httpPost({
                url: '/login',
                data
            })
            return handleHttp(res)
        },
        //添加订单
        async addOrder(data) {
            const res = await httpPost({
                url: '/addOrder',
                data
            })
            return handleHttp(res)
        },
        //获取列表
        async getOrderLists(data) {
            const res = await httpGet({
                url: '/orderLists',
                data
            })
            return handleHttp(res)
        },
        //支付
        async orderPay(data) {
            const res = await httpPost({
                url: '/orderPay',
                data
            })
            return handleHttp(res)
        },
        //获取订单详情
        async orderInfo(data) {
            const res = await httpGet({
                url: '/orderInfo',
                data
            })
            return handleHttp(res)
        },
        //收货
        async getOrder(data) {
            const res = await httpPost({
                url: '/getOrder',
                data
            })
            return handleHttp(res)
        },
        //评论
        async comments(data) {
            const res = await httpPost({
                url: '/comments',
                data
            })
            return handleHttp(res)
        },
        //获取商品详情
        async getProductInfo(data) {
            const res = await httpGet({
                url: '/getProductInfo',
                data
            })
            return handleHttp(res)
        },






        //获取省市级区
        async getProductInfo(data) {
            const res = await httpGet({
                url: '/getArea',
                data
            })
            return handleHttp(res)
        },
        //添加经销商
        async addDistributor(data) {
            const res = await httpPost({
                url: '/addDistributor',
                data
            })
            return handleHttp(res)
        },
        //添加经销商
        async getAllDistributor(data) {
            const res = await httpGet({
                url: '/getAllDistributor',
                data
            })
            return handleHttp(res)
        },
        //删除经销商
        async deleteDistributor(data) {
            const res = await httpPost({
                url: '/deleteDistributor',
                data
            })
            return handleHttp(res)
        },
        //获取预约列表
        async getAllAppointment(data) {
            const res = await httpGet({
                url: '/getAllAppointment',
                data
            })
            return handleHttp(res)
        },
        //获取所有的第三方 数据
        async getAllTreeData(data) {
            const res = await httpGet({
                url: '/getAllTreeData',
                data
            })
            return handleHttp(res)
        }
    }
}
export default httpLists