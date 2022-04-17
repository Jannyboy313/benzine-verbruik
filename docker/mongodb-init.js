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

// Creating fuel test data.
db.createCollection('fuels');
db.fuels.insert({
	litre: 40,
	price: 120,
	gas_station: 'Shell',
	location: 'Amsterdam',
	user: ObjectId('625bcdd583407077fd192c34'),
	createdAt: ISODate('2022-04-04T19:47:23.737+00:00'),
	updatedAt: ISODate('2022-04-04T19:47:23.737+00:00')
});
db.fuels.insert({
	litre: 5,
	price: 20,
	gas_station: 'BP',
	location: 'Amsterdam',
	user: ObjectId('625bcdd583407077fd192c34'),
	createdAt: ISODate('2022-04-04T19:47:23.737+00:00'),
	updatedAt: ISODate('2022-04-04T19:47:23.737+00:00')
});
db.fuels.insert({
	litre: 33,
	price: 99,
	gas_station: 'Total',
	location: 'Amsterdam',
	user: ObjectId('625bcdd583407077fd192c34'),
	createdAt: ISODate('2022-04-04T19:47:23.737+00:00'),
	updatedAt: ISODate('2022-04-04T19:47:23.737+00:00')
});

// Creating ride test data
db.createCollection('rides');
db.rides.insert({
	title: 'Driving to grandma',
	description: 'A nice and long drive to grandma.',
	distance: 400,
	user: ObjectId('625bcdd583407077fd192c34'),
	createdAt: ISODate('2022-04-04T19:47:23.737+00:00'),
	updatedAt: ISODate('2022-04-04T19:47:23.737+00:00')
});
db.rides.insert({
	title: 'Driving to uncle',
	description: 'A short drive to uncle',
	distance: 50,
	user: ObjectId('625bcdd583407077fd192c34'),
	createdAt: ISODate('2022-04-04T19:47:23.737+00:00'),
	updatedAt: ISODate('2022-04-04T19:47:23.737+00:00')
});
db.rides.insert({
	title: 'Driving to poland',
	description: 'A long vacation drive to poland and back',
	distance: 2022,
	user: ObjectId('625bcdd583407077fd192c34'),
	createdAt: ISODate('2022-04-04T19:47:23.737+00:00'),
	updatedAt: ISODate('2022-04-04T19:47:23.737+00:00')
});
