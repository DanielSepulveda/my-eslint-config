import * as React from 'react';

type Props = {
  nameFilter: string;
  param1: string;
  param2: string;
  param3: string;
};

function Users(props: Props) {
  const { nameFilter } = props;

  const users = [
    { name: 'Janice', friends: ['Albert', 'Nancy'], id: 23 },
  ].filter(({ name }) => name.toLowerCase().includes(nameFilter));

  const name: string = 'daniel';
  if (name === 'juan') {
    console.log('ok');
  }

  return (
    <div className="user-list" id="users-section" data-testid="users">
      {users.map((user) => (
        <div key={user.id}>
          {user.name} is friends with {user.friends.join(', ')}
        </div>
      ))}
    </div>
  );
}

export default Users;

export function variableNames() {
  const user$ = 'user stream';
  const $el = 'dom node';
  const camelCase = 'camelCase';
  const PascalCase = 'PascalCase';
  const CONST_VALUE = 'CONST_VALUE';
  return { $el, user$, camelCase, PascalCase, CONST_VALUE };
}
