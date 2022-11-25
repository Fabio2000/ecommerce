import React from 'react';




export default function () {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
      <div>
          <footer>
              <p>©Copyright 2022 by Tiringa Group.  All rights reversed.</p>
          </footer>
      </div>
  )
}