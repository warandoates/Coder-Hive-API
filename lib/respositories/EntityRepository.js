class EntityRepository {
    constructor({entityName, db}) {
        this._entityName = entityName;
        this._db = db;
    }

    async getAll() {
        try {
            let allEntities = await this._db(this._entityName);
            return allEntities;
        } catch (error) {
            throw error
        }
    }

    //Returns single item, like single user, for example
    async getByIdentifier(identifier, idType) {
        try {
            let entity = await this._db(this._entityName).where({[idType]: identifier});
            return entity[0];
        } catch (error) {
            throw error
        }
    }

    //Returns multiple items in array, like all components for a single user for example
    async getCollectionByIdentifier(identifier, idType) {
        try {
            let entity = await this._db(this._entityName).where({[idType]: identifier});
            return entity;
        } catch (error) {
            throw error
        }
    }

    async getCollectionByIdentifierSpecial(identifier, idType, specialValue) {
        try {
            let entity;
            if (specialValue) {
                entity = await this._db(this._entityName)
                    .join('User', 'User.id', '=', `${this._entityName}.user_id`)
                    .join('Component', 'Component.id', '=', `${this._entityName}.id`)
                    .where({[idType]: identifier})
                    .select(
                        `${this._entityName}.id`,
                        `${this._entityName}.user_id`,
                        'User.display_name',
                        `${this._entityName}.component_id`,
                        'Component.title', 'Component.description',
                        `${this._entityName}.created_at`,
                        `${this._entityName}.updated_at`,
                        `${this._entityName}.${specialValue}`,
                    );
            } else {
                entity = await this._db(this._entityName)
                    .join('User', 'User.id', '=', `${this._entityName}.user_id`)
                    .join('Component', 'Component.id', '=', `${this._entityName}.id`)
                    .where({[idType]: identifier})
                    .select(
                        `${this._entityName}.id`,
                        `${this._entityName}.user_id`,
                        'User.display_name',
                        `${this._entityName}.component_id`,
                        'Component.title', 'Component.description',
                        `${this._entityName}.created_at`,
                        `${this._entityName}.updated_at`,
                    );
            }
            return entity;
        } catch (error) {
            throw error
        }
    }

    async createNew(args) {
        try {
            let [entity] = await this._db(this._entityName).insert(args, '*');
            return entity;
        } catch (error) {
            throw error
        }
    }

    async update(args) {
        let id = args.id
        delete args.id
        try {
            let [entity] = await this._db(this._entityName).where({id}).update(args, "*")
            return Object.assign({}, entity)
        } catch (error) {
            console.log(error)
        }
    }

    async delete(args) {
        let id = args.id
        delete args.id
        try {
            let [entity] = await this._db(this._entityName).where({id}).update({
                status: 'Dead Bee',
                hashed_password: 'deletedaccount'
            }, "*")
            return Object.assign({}, entity)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = EntityRepository;