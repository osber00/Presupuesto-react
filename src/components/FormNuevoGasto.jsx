import React from "react";

function FormNuevoGasto() {
  return (
      <div className='card space-y-5 p-4 sm:p-5'>
        <label className='block'>
          <span className='font-medium text-slate-600 dark:text-navy-100'>
            Select Author
          </span>
          <select
            className='mt-1.5 w-full'
            x-init='$el._x_tom = new Tom($el,pages.tomSelect.author)'
            placeholder='Select Author...'></select>
        </label>
        <label className='block'>
          <span className='font-medium text-slate-600 dark:text-navy-100'>
            Category
          </span>
          <select
            className='mt-1.5 w-full'
            x-init="$el._x_tom = new Tom($el,{create: false,sortField: {field: 'text',direction: 'asc'}})">
            <option value>Select the category</option>
            <option value='digital'>Digital</option>
            <option value='technology'>Technology</option>
            <option value='home'>Home</option>Select Author
            <option value='accessories'>Accessories</option>
          </select>
        </label>
        <label className='block'>
          <span className='font-medium text-slate-600 dark:text-navy-100'>
            Tags
          </span>
          <input
            className='mt-1.5 w-full'
            placeholder='Enter Tags'
            x-init='$el._x_tom = new Tom($el,{create: true})'
          />
        </label>
      </div>
  );
}

export default FormNuevoGasto;
