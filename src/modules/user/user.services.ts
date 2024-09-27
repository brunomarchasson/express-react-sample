// import { FilterQuery } from 'mongoose';
// import { hashPassword } from '../../utils/auth.utils';
// import { getPaginator } from '../../utils/getPaginator';
// import { UserModelType, UserType } from './user.dto';
// import User, { IUserDocument } from './user.model';
// import { GetUsersSchemaType } from './user.schema';
// import { MongoIdSchemaType } from '../../common/common.schema';

import { AppDataSource } from '../../data-source';
import { User } from '../../entity/User.entity';
import { hashPassword } from '../auth/auth.utils';
import { UserModelType } from './user.dto';
// import { GetUsersSchemaType } from './user.schema';

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
  console.log('getUserById=>', user);
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
  const results = await repository.findAndCount();
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
    paginatorInfo: {},
  };
};

export const createUser = async (
  payload: UserModelType,
  checkExist: boolean = true,
): Promise<User> => {
  const repository = AppDataSource.getRepository(User);

  if (checkExist) {
    const isUserExist = await repository.findOneBy({ email: payload.email });

    if (!isUserExist) {
      throw new Error('User already exists');
    }
  }

  if (!payload.password) {
    throw new Error('Password is required');
  }

  const hashedPassword = await hashPassword(payload.password);

  const createdUser = await repository.create({
    ...payload,
    password: hashedPassword,
  });

  return { ...createdUser, password: '' };
};
