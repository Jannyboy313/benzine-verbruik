conn = new Mongo();
db = conn.getDB('benzine');
db.createUser({
	user: 'test',
	pwd: 'testpwd',
	roles: [
		{
			role: 'readWrite',
			db: 'benzine'
		}
	]
});

db.createCollection('users');
db.users.insert({
	_id: ObjectId('625bcdd583407077fd192c34'),
	email: 'test@test.nl',
	password: '$2a$12$grFe9.QJGJKDJ2uvj9/8ee3kSg52JUopDNqmsqdJQfVxLU4.pyNri',
	createdAt: ISODate('2022-04-04T19:47:23.737+00:00'),
	updatedAt: ISODate('2022-04-04T19:47:23.737+00:00')
});
