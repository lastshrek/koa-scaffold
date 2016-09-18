export function getOne(ctx) {
	ctx.render('index', {
		title: '后台',
	})
}

export function create(ctx) {
	console.log('body: ', ctx.request.body)
	ctx.body = ctx.request.body
}
