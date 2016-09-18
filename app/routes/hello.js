import Router from 'koa-router'

export default function(controllers, validate) {
	const router = new Router({
		prefix: '/hello',
	})

	router.get('/', controllers.hello.getOne)

	return router
}
