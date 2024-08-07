/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support '1548221490638'
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}
export const SHOPS_LONG = [{
  'name': 'LDT-TTS-001',
  'multi_profile_id': '46.37.119.237:38090',
  'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
  'id': '6e663592-7727-4c12-ad21-8d247ed72705'
}]

export const SHOPS_HIEP = [{
  'name': 'Julio',
  'multi_profile_id': 'Long',
  'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
  'id': '3315c0d2-07ba-4382-a2bf-68a5e00ae182'
}]

export const SHOPS_PHUONGANH = [
  {
    'name': 'Joanna-PhuongAnh',
    'multi_profile_id': '1',
    'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
    'id': '4bf1dcd3-3e74-4dd7-b5c9-1e76d5097e0a'
  },
  {
    'name': 'Ashley-PhuongAnh',
    'multi_profile_id': '16',
    'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
    'id': '0d86fe79-38a6-4016-ac6e-6d84f4d94c0e'
  },
  {
    'name': 'anita-PhuongAnh',
    'multi_profile_id': '11',
    'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
    'id': '1d22333b-786f-48db-b3b7-8a6c7eaff0a3'
  }
]

export const SHOPS_CHI = [
  {
    'name': 'Anthony James Rosetti - Chi',
    'multi_profile_id': '9',
    'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
    'id': 'e20c8331-5419-4f21-86e2-ab992abffd36'
  },
  {
    'name': 'Roland - Chi',
    'multi_profile_id': '10',
    'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
    'id': 'e05d46bb-0f1a-4dad-a7ab-74f976661836'
  }
]

export const SHOPS_NGHIA = [
  {
    'name': 'Erminia-Nghia',
    'multi_profile_id': '7',
    'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
    'id': '52b53523-8811-4fa6-aeb7-4397ebcf994d'
  },
  {
    'name': 'Liam-Nghia',
    'multi_profile_id': '12',
    'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
    'id': '0c0abae7-4c6c-4437-b186-708bb79aad41'
  },
  {
    'name': 'Heldi-Nghia',
    'multi_profile_id': '14',
    'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
    'id': 'bad1db86-4c63-4da6-93cf-04fb6a960064'
  }
]

export const SHOPS_BOM = [
  {
    'name': 'Anthonye-Bom',
    'multi_profile_id': '8',
    'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
    'id': '43609e74-9b90-4c00-a068-721188efbf92'
  },
  {
    'name': 'Michael-Bom',
    'multi_profile_id': '13',
    'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
    'id': '20c2aa41-857d-4852-bf2b-04e947fabbbc'
  },
  {
    'name': 'Kari-Bom',
    'multi_profile_id': '15',
    'user_id': '3e014d17-2c51-44fb-af2c-a9e12bdc8d54',
    'id': '98c86e56-a7bf-4eaf-9331-e18447b53a33'
  }
]
