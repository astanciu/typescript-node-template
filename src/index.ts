type User = {
  name: string;
};

async function main(user: User): Promise<void> {
  console.log(`Hello ${user.name}`);
}

const user1: User = {
  name: 'Jon'
};

main(user1);
