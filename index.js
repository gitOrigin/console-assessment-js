/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (propArr,objArr) => {
  return objArr.map(item=>{
    propArr.forEach(prop=>{
      Reflect.deleteProperty(item,prop);
    })
    return item;
  })
};
exports.excludeByProperty = (prop,objArr) => {
  return objArr.filter(item=>{
    return !item[prop];
  })
};
exports.sumDeep = objArr => {
  return objArr.map(obj=>{
    let sum=obj.objects.reduce((pre,item)=>{
      return pre+item.val;
    },0);
    return {objects:sum};
  })
};
exports.applyStatusColor = (colorObj,objArr) => {
  let obj={};
  Object.keys(colorObj).forEach(color=>{
    colorObj[color].forEach(status=>{
      obj[status]=color;
    })
  })
  let result=[];
  objArr.map(item=>{
    if(obj[item.status]){
      result.push({
        ...item,
        color:obj[item.status]
      })
    }
  })
  return result;
};
exports.createGreeting = (fn,greeting) => {
  return name => {
    return fn(greeting,name);
  }
};
exports.setDefaults = defaultObj => {
  return obj => {
    return {
      ...defaultObj,
      ...obj
    }
  }
};
exports.fetchUserByNameAndUsersCompany = async (name,services) => {
  let [ status, users ]= await Promise.all([services.fetchStatus(),services.fetchUsers()]);
  let user = users.find(item=>item.name==name);
  let company = await services.fetchCompanyById(user.companyId);
  return {
    company,
    status,
    user
  }
};
