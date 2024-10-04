import { AppDataSource } from '../../data-source';
import { User } from '../../entity/User.entity';
import { hashPassword } from '../auth/auth.utils';
import { apiError } from '../../comon/error';
import { UserModelType } from './user.dto';
import { randomBytes } from 'crypto';

export const updateUser = async (
  userId: string,
  payload: Partial<User>,
): Promise<User | null> => {
  const repository = AppDataSource.getRepository(User);
  console.log('updateUser', payload);

  const result = await repository.update(userId, payload);
  console.log('user', result);
  return getUserById(userId);
};

export const getUserById = async (userId: string): Promise<User | null> => {
  const repository = AppDataSource.getRepository(User);
  const user = await repository.findOne({
    where: { id: userId },
  });
  return user;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const repository = AppDataSource.getRepository(User);
  const user = await repository.findOne({
    where: { email: email },
  });

  return user;
};

export const deleteUser = async (userId: string) => {
  const repository = AppDataSource.getRepository(User);
  const result = await repository.delete(userId);

  if (!result.affected) {
    throw new Error('User not found');
  }
};

export const getUsers = async (
  userId: string,
  // payload: GetUsersSchemaType,
) => {
  const repository = AppDataSource.getRepository(User);
  const currentUser = await repository.findOneBy({ id: userId });
  if (!currentUser) {
    throw new Error('User must be logged in');
  }
  const [results, totalRecords] = await repository.findAndCount();
  console.log('resulkts', results);
  //   skip
  // take

  // if (payload.searchString) {
  //   conditions.$or = [
  //     { firstName: { $regex: payload.searchString, $options: 'i' } },
  //     { lastName: { $regex: payload.searchString, $options: 'i' } },
  //     { email: { $regex: payload.searchString, $options: 'i' } },
  //   ];
  // }

  // if (payload.filterByRole) {
  //   conditions.role = payload.filterByRole;
  // } else {
  //   conditions.role = { $in: ['DEFAULT_USER'] };
  // }

  // const totalRecords = await User.countDocuments(conditions);
  // const paginatorInfo = getPaginator(
  //   payload.limitParam,
  //   payload.pageParam,
  //   totalRecords,
  // );

  // const results = await User.find(conditions)
  //   .limit(paginatorInfo.limit)
  //   .skip(paginatorInfo.skip)
  //   .exec();

  return {
    results,
    paginatorInfo: {
      skip: 0,
      limit: 10,
      currentPage: 1,
      pages: 0,
      hasNextPage: true,
      totalRecords,
      pageSize: 10,
    },
  };
};

export const createUser = async (
  payload: Partial<Omit<UserModelType, 'id'>>,
  checkExist: boolean = true,
): Promise<User> => {
  const repository = AppDataSource.getRepository(User);

  if (checkExist) {
    const isUserExist = await repository.findOneBy({ email: payload.email });
    if (isUserExist) {
      throw apiError(409, 'User already exists');
    }
  }

  const password = randomBytes(30).toString('hex');
  const hashedPassword = await hashPassword(password);

  const createdUser = await repository.save({
    ...payload,
    password: hashedPassword,
  });

  createdUser.password = '';
  return createdUser; //{ ...createdUser, password: '' };
};
