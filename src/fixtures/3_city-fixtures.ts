import { Knex } from 'knex';
import { ICountry } from 'src/modules/country/country.interface';

const tableName = 'city';

export async function seed(knex: Knex): Promise<void> {
  const [{ count }] = await knex(tableName).count();
  if (Number(count) > 0) return;

  // Fetch country IDs
  const countries = await knex<ICountry>('country').select('id', 'name');

  // Map country names to their IDs
  const countryMap = Object.fromEntries(countries.map((country) => [country.name, country.id]));

  // Insert cities with their group IDs
  await knex(tableName).insert([
    // Test Groups
    {
      name: 'PizzaDAO Group [Test]',
      country_id: countryMap['Sri Lanka'],
      group_id: -1002537156394,
      telegram_link: 'https://t.me/+AUSqVVJAh8E3N2Y1',
    },

    // Abidjan
    {
      name: 'Abidjan',
      country_id: countryMap['Abidjan'],
      group_id: -4743402147,
      telegram_link: 'https://t.me/+JWOR_uVzisw3NWZk',
    },
    // Afghanistan
    // {
    //   name: 'Kabul',
    //   country_id: countryMap['Afghanistan'],
    //   group_id: null,
    //   telegram_link: null,
    // },
    {
      name: 'Mazar-e-Sharif',
      country_id: countryMap['Afghanistan'],
      group_id: -1002068411229,
      telegram_link: 'https://t.me/+Q8ChxoCFslAzMzFh',
    },
    // Albania
    {
      name: 'Tirana',
      country_id: countryMap['Albania'],
      group_id: -1002135396107,
      telegram_link: 'https://t.me/+De-WOUKfhihlYmVk',
    },
    // Antigua
    {
      name: 'Antigua',
      country_id: countryMap['Antigua'],
      group_id: -1001932538298,
      telegram_link: 'https://t.me/+WBvUDAd8CY9kOWFh',
    },
    // Argentina
    {
      name: 'Buenos Aires',
      country_id: countryMap['Argentina'],
      group_id: -1001513047765,
      telegram_link: 'https://t.me/+Am905YSPAo1jMTkx',
    },
    {
      name: 'Córdoba',
      country_id: countryMap['Argentina'],
      group_id: -4706786212,
      telegram_link: 'https://t.me/+oK58UluVeuFhZjgx',
    },
    {
      name: 'Gualeguaychú Entre Ríos',
      country_id: countryMap['Argentina'],
      group_id: -4756690061,
      telegram_link: 'https://t.me/+kK8avIREGho1MWQ5',
    },
    {
      name: 'La Plata',
      country_id: countryMap['Argentina'],
      group_id: -4143607793,
      telegram_link: 'https://t.me/+tPDvp05Fw0BmYzZh',
    },
    {
      name: 'Mendoza',
      country_id: countryMap['Argentina'],
      group_id: -4676652309,
      telegram_link: 'https://t.me/+aM2DNNqo31VkZTc5',
    },
    {
      name: 'Misiones',
      country_id: countryMap['Argentina'],
      group_id: -4611752323,
      telegram_link: 'https://t.me/+yISwTIJCl0QxYjcx',
    },
    // Armenia
    {
      name: 'Gyumri',
      country_id: countryMap['Armenia'],
      group_id: -1002095183513,
      telegram_link: 'https://t.me/+pujGWaWqnEI2NGYx',
    },
    {
      name: 'Vanadzor',
      country_id: countryMap['Armenia'],
      group_id: -1002232448805,
      telegram_link: 'https://t.me/+vgsVb0Gw_Bs0Mjdh',
    },
    {
      name: 'Yerevan',
      country_id: countryMap['Armenia'],
      group_id: -1002662445747,
      telegram_link: 'https://t.me/+TBASb-ziPXBiZjAy',
    },
    // Australia
    {
      name: 'Adelaide',
      country_id: countryMap['Australia'],
      group_id: -4274267340,
      telegram_link: 'https://t.me/+GDtIMwgyoZ5mOTUx',
    },
    {
      name: 'Brisbane',
      country_id: countryMap['Australia'],
      group_id: -1001364043719,
      telegram_link: 'https://t.me/+MUqLxsm0M4s4ZDkx',
    },
    {
      name: 'Gold Coast (Queensland)',
      country_id: countryMap['Australia'],
      group_id: -4686720534,
      telegram_link: 'https://t.me/+3ZfOj2tI3NowMjFh',
    },
    {
      name: 'Melbourne',
      country_id: countryMap['Australia'],
      group_id: -1001942666252,
      telegram_link: 'https://t.me/+VMUXCL1IsntlMjc5',
    },
    {
      name: 'Perth',
      country_id: countryMap['Australia'],
      group_id: -4056409912,
      telegram_link: 'https://t.me/+jbMQUJtjAG0yMDY5',
    },
    {
      name: 'Sydney',
      country_id: countryMap['Australia'],
      group_id: -941625707,
      telegram_link: 'https://t.me/+j_xPt-6TXgQ0NmRh',
    },
    // Austria
    {
      name: 'Innsbruck',
      country_id: countryMap['Austria'],
      group_id: -4190383454,
      telegram_link: 'https://t.me/+mE-D2SOrAps1M2E5',
    },
    {
      name: 'Linz',
      country_id: countryMap['Austria'],
      group_id: -4111540885,
      telegram_link: 'https://t.me/+oo5s3q_J5Hc5ZGMx',
    },
    {
      name: 'Vienna',
      country_id: countryMap['Austria'],
      group_id: -1001955069841,
      telegram_link: 'https://t.me/+Z8xFwfPs8MxkZjNh',
    },
    // Bahamas
    {
      name: 'Nassau',
      country_id: countryMap['Bahamas'],
      group_id: -1002159345662,
      telegram_link: 'https://t.me/+4HAbUBUVpMY1ZTYx',
    },
    // Bangladesh
    {
      name: 'Dhaka',
      country_id: countryMap['Bangladesh'],
      group_id: -1002030538380,
      telegram_link: 'https://t.me/+bH7zVshRZB9iYWEx',
    },
    // Belgium
    {
      name: 'Antwerp',
      country_id: countryMap['Belgium'],
      group_id: -1001928969617,
      telegram_link: 'https://t.me/+Ce_3l8rwPfViY2Qx',
    },
    {
      name: 'Bruges',
      country_id: countryMap['Belgium'],
      group_id: -1002296133545,
      telegram_link: 'https://t.me/+IWXHcddW5GI5Y2Ex',
    },
    {
      name: 'Brussels',
      country_id: countryMap['Belgium'],
      group_id: -1002144615446,
      telegram_link: 'https://t.me/+18lGeHKKqiw4ZGJh',
    },
    // Benin
    {
      name: 'Calavi',
      country_id: countryMap['Benin'],
      group_id: -1002068296055,
      telegram_link: 'https://t.me/+NfSwNeX1R2Y1Yzdh',
    },
    // Bhutan
    {
      name: 'Thimphu',
      country_id: countryMap['Bhutan'],
      group_id: -4714850826,
      telegram_link: 'https://t.me/+7ws-r97knwpiNmY5',
    },
    // Bolivia
    {
      name: 'Cochabamba',
      country_id: countryMap['Bolivia'],
      group_id: -4142379071,
      telegram_link: 'https://t.me/+Vqhstej8FqQyMjIx',
    },
    {
      name: 'La Paz',
      country_id: countryMap['Bolivia'],
      group_id: -4018464227,
      telegram_link: 'https://t.me/+tiNxBYnwRx83MDIx',
    },
    {
      name: 'Santa Cruz',
      country_id: countryMap['Bolivia'],
      group_id: -4128585524,
      telegram_link: 'https://t.me/+d_KdbKTZRyU2NTgx',
    },
    // Botswana
    {
      name: 'Gaborone',
      country_id: countryMap['Botswana'],
      group_id: -1002120816419,
      telegram_link: 'https://t.me/+ymH9l-lc8oNlYmUx',
    },
    // Brazil
    {
      name: 'Belo Horizonte',
      country_id: countryMap['Brazil'],
      group_id: -4740933920,
      telegram_link: 'https://t.me/+MBnpRab-Wbw2MWI5',
    },
    {
      name: 'Brasilia',
      country_id: countryMap['Brazil'],
      group_id: -943460074,
      telegram_link: 'https://t.me/+wGJjX7piV4gzM2Nh',
    },
    {
      name: 'Búzios',
      country_id: countryMap['Brazil'],
      group_id: -4687749004,
      telegram_link: 'https://t.me/+WlqFgKPYcjJhMTFh',
    },
    {
      name: 'Curitiba',
      country_id: countryMap['Brazil'],
      group_id: -4640851619,
      telegram_link: 'https://t.me/+TuwveySkWm4xYTgx',
    },
    {
      name: 'Florianopolis',
      country_id: countryMap['Brazil'],
      group_id: -1002059606250,
      telegram_link: 'https://t.me/+XEDeLsqPBZllYzUx',
    },
    {
      name: 'Fortaleza',
      country_id: countryMap['Brazil'],
      group_id: -4608534462,
      telegram_link: 'https://t.me/+kuccroQVpL05Yzgx',
    },
    {
      name: 'Macaé',
      country_id: countryMap['Brazil'],
      group_id: -4618134810,
      telegram_link: 'https://t.me/+jNq-cQiSFZ43OWQ5',
    },
    {
      name: 'Natal',
      country_id: countryMap['Brazil'],
      group_id: -4709921696,
      telegram_link: 'https://t.me/+_vMAWwbDaEZhYTRh',
    },
    {
      name: 'Porto Alegre',
      country_id: countryMap['Brazil'],
      group_id: -1001941064612,
      telegram_link: 'https://t.me/+RhvB_7_MmjZmOWMx',
    },
    {
      name: 'Rio de Janeiro',
      country_id: countryMap['Brazil'],
      group_id: -1001908831891,
      telegram_link: 'https://t.me/+Khe94ae94OMxOTdh',
    },
    {
      name: 'Salvador Bahia',
      country_id: countryMap['Brazil'],
      group_id: -4648973538,
      telegram_link: 'https://t.me/+JRFX1SxqVTYzZDNh',
    },
    {
      name: 'Sao Paulo',
      country_id: countryMap['Brazil'],
      group_id: -1001813315874,
      telegram_link: 'https://t.me/+Q_BUhWfjQdtkOGMx',
    },
    // Brunei
    {
      name: 'Bandar Seri Begawan',
      country_id: countryMap['Brunei'],
      group_id: -4224607411,
      telegram_link: 'https://t.me/+y8myH79iXB82MjYx',
    },
    // Bulgaria
    {
      name: 'Sofia',
      country_id: countryMap['Bulgaria'],
      group_id: -4674113344,
      telegram_link: 'https://t.me/+BzYbFevfR9k0NjVh',
    },
    {
      name: 'Varna',
      country_id: countryMap['Bulgaria'],
      group_id: -1001877106043,
      telegram_link: 'https://t.me/+bkn0PfEL1x5mNWNh',
    },
    // Burundi
    {
      name: 'Bujumbura',
      country_id: countryMap['Burundi'],
      group_id: -4761975392,
      telegram_link: 'https://t.me/+Rggy1kNGygg5Mzdh',
    },
    // Cambodia
    {
      name: 'Phnom Penh',
      country_id: countryMap['Cambodia'],
      group_id: -1001737654306,
      telegram_link: 'https://t.me/+Pan9PiYoPv82M2Zh',
    },
    // Canada
    {
      name: 'Kelowna',
      country_id: countryMap['Canada'],
      group_id: -4665766972,
      telegram_link: 'https://t.me/+y3JXryPBr_RkODBh',
    },
    // Canada Alberta
    {
      name: 'Calgary',
      country_id: countryMap['Canada Alberta'],
      group_id: -1002013341024,
      telegram_link: 'https://t.me/+UxccHo5CQTxmNjJh',
    },
    {
      name: 'Edmonton',
      country_id: countryMap['Canada Alberta'],
      group_id: -1002173182180,
      telegram_link: 'https://t.me/+LJ0EsIyEwjs5MjBh',
    },
    // Canada British Columbia
    {
      name: 'Vancouver',
      country_id: countryMap['Canada British Columbia'],
      group_id: -1001633386795,
      telegram_link: 'https://t.me/+1h_LYj6IrOk0NmVh',
    },
    {
      name: 'Victoria',
      country_id: countryMap['Canada British Columbia'],
      group_id: -1002197679519,
      telegram_link: 'https://t.me/+KF_9qDyWWsszMGIx',
    },
    // Canada Manitoba
    {
      name: 'Winnipeg',
      country_id: countryMap['Canada Manitoba'],
      group_id: -4778676460,
      telegram_link: 'https://t.me/+RvDmLMcR9KlhYTEx',
    },
    // Canada Nova Scotia
    {
      name: 'Halifax',
      country_id: countryMap['Canada Nova Scotia'],
      group_id: -4284088249,
      telegram_link: 'https://t.me/+fLOZ2z7q19xmOWNh',
    },
    // Canada Ontario
    {
      name: 'Hamilton',
      country_id: countryMap['Canada Ontario'],
      group_id: -1002149739796,
      telegram_link: 'https://t.me/+gJPQnJFeGK1jOWM5',
    },
    {
      name: 'Ottawa',
      country_id: countryMap['Canada Ontario'],
      group_id: -929832538,
      telegram_link: 'https://t.me/+2h3lm4H0YZ1lMTRh',
    },
    {
      name: 'Toronto',
      country_id: countryMap['Canada Ontario'],
      group_id: -1001923445388,
      telegram_link: 'https://t.me/+kk5ViBwxPnIzMDkx',
    },
    {
      name: 'Waterloo',
      country_id: countryMap['Canada Ontario'],
      group_id: -1002305467343,
      telegram_link: 'https://t.me/+37Ad0EN10ORiZTdh',
    },
    // Canada Quebec
    {
      name: 'Montreal',
      country_id: countryMap['Canada Quebec'],
      group_id: -1001807837676,
      telegram_link: 'https://t.me/+g0YK4rU95SRiNGMx',
    },
    // Canada Saskatchewan
    {
      name: 'Saskatoon',
      country_id: countryMap['Canada Saskatchewan'],
      group_id: -4194533116,
      telegram_link: 'https://t.me/+LjPOB159sSthNDNh',
    },
    // Cayman Islands
    {
      name: 'Cayman Islands',
      country_id: countryMap['Cayman Islands'],
      group_id: -1002126828164,
      telegram_link: 'https://t.me/+MvRD2I72Vt82YzEx',
    },
    // Chile
    {
      name: 'Maullin',
      country_id: countryMap['Chile'],
      group_id: -4150059449,
      telegram_link: 'https://t.me/+kkaBTQya8YVmNTYx',
    },
    {
      name: 'Puerto Varas',
      country_id: countryMap['Chile'],
      group_id: -4103351674,
      telegram_link: 'https://t.me/+8OCKqharNkVkMDRh',
    },
    {
      name: 'Santiago',
      country_id: countryMap['Chile'],
      group_id: -4125979782,
      telegram_link: 'https://t.me/+oAq1WtYo2Wg3YTgx',
    },
    // China
    {
      name: 'Beijing',
      country_id: countryMap['China'],
      group_id: -1001506018977,
      telegram_link: 'https://t.me/+NhdAVPA34GY3YWJh',
    },
    {
      name: 'Changsha',
      country_id: countryMap['China'],
      group_id: -1002650761003,
      telegram_link: 'https://t.me/+6734pXkmIYZkMzhi',
    },
    {
      name: 'Chengdu',
      country_id: countryMap['China'],
      group_id: -4070133022,
      telegram_link: 'https://t.me/+UG4LYZ0OouZkODc5',
    },
    {
      name: 'Dali',
      country_id: countryMap['China'],
      group_id: -4767197995,
      telegram_link: 'https://t.me/+xg1rEtf7m7o3Y2Ix',
    },
    {
      name: 'Hangzhou',
      country_id: countryMap['China'],
      group_id: -1002145047937,
      telegram_link: 'https://t.me/+Va-EpaETUd5jNDYx',
    },
    {
      name: 'Hong Kong',
      country_id: countryMap['China'],
      group_id: -1001641358817,
      telegram_link: 'https://t.me/+ArdjT-D2uWw3NmZh',
    },
    {
      name: 'Macao',
      country_id: countryMap['China'],
      group_id: -1002045836834,
      telegram_link: 'https://t.me/+TFGd3-QXRnMxMmUx',
    },
    {
      name: 'Ningbo',
      country_id: countryMap['China'],
      group_id: -4227719166,
      telegram_link: 'https://t.me/+n1e-YBy88vIzZGZh',
    },
    {
      name: 'Shanghai',
      country_id: countryMap['China'],
      group_id: -4795026685,
      telegram_link: 'https://t.me/+BHjrUZdqcAcxZjhh',
    },
    {
      name: 'Shenzhen',
      country_id: countryMap['China'],
      group_id: -4007649839,
      telegram_link: 'https://t.me/+PwBxC85_y8tjYmUx',
    },
    {
      name: 'Suzhou',
      country_id: countryMap['China'],
      group_id: -1002208268820,
      telegram_link: 'https://t.me/+mJwcuPAgdkJhNTMx',
    },
    {
      name: 'Yiwu',
      country_id: countryMap['China'],
      group_id: -4281112662,
      telegram_link: 'https://t.me/+9RWmbYBBljQzOWMx',
    },
    {
      name: 'Yunnan',
      country_id: countryMap['China'],
      group_id: -1002214631321,
      telegram_link: 'https://t.me/+g7W-Vz5G7t5kMTk5',
    },
    // Colombia
    // {
    //   name: 'Arauca',
    //   country_id: countryMap['Colombia'],
    //   group_id: null,
    //   telegram_link: 'https://chat.whatsapp.com/JA6vQCP6uCaIj0Gv2kiU1A',
    // },
    {
      name: 'Bogota',
      country_id: countryMap['Colombia'],
      group_id: -1001939361667,
      telegram_link: 'https://t.me/+OsL4g8b52KBiOWIx',
    },
    {
      name: 'Cali',
      country_id: countryMap['Colombia'],
      group_id: -4113188095,
      telegram_link: 'https://t.me/+5jv65SAxeu5jYzhh',
    },
    {
      name: 'Cartagena de Indias',
      country_id: countryMap['Colombia'],
      group_id: -1002182199547,
      telegram_link: 'https://t.me/+KKC3CCLGYX03Y2M5',
    },
    // {
    //   name: 'Mayapo',
    //   country_id: countryMap['Colombia'],
    //   group_id: null,
    //   telegram_link: 'https://chat.whatsapp.com/JA6vQCP6uCaIj0Gv2kiU1A',
    // },
    {
      name: 'Medellin',
      country_id: countryMap['Colombia'],
      group_id: -1001656025265,
      telegram_link: 'https://t.me/+CcALe_aqnew2OTJh',
    },
    // Costa Rica
    {
      name: 'Uvita',
      country_id: countryMap['Costa Rica'],
      group_id: -1002190072225,
      telegram_link: 'https://t.me/+_ie1-wZwRyRiMGIx',
    },
    {
      name: 'San Jose',
      country_id: countryMap['Costa Rica'],
      group_id: -1002452959570,
      telegram_link: 'https://t.me/+BtFO1PRVtTs5Yjkx',
    },
    {
      name: 'Tamarindo',
      country_id: countryMap['Costa Rica'],
      group_id: -1001978850288,
      telegram_link: 'https://chat.whatsapp.com/H3K0ICNhGMhC6HPOE83S1l',
    },
    // Croatia
    {
      name: 'Split',
      country_id: countryMap['Croatia'],
      group_id: -1001856628090,
      telegram_link: 'https://t.me/+-ydn-Koboz5mZmY5',
    },
    {
      name: 'Zagreb',
      country_id: countryMap['Croatia'],
      group_id: -4111272289,
      telegram_link: 'https://t.me/+4f4f6bi5ReI4MGUx',
    },
    // Cuba
    {
      name: 'La Havana',
      country_id: countryMap['Cuba'],
      group_id: -4638605964,
      telegram_link: 'https://t.me/+V51JNP8ZAcFiM2Mx',
    },
    // Cyprus
    {
      name: 'Limassol',
      country_id: countryMap['Cyprus'],
      group_id: -1002015246155,
      telegram_link: 'https://t.me/+nt-7Y0JFQysyM2Nh',
    },
    // Czech Republic
    {
      name: 'Brno',
      country_id: countryMap['Czech Republic'],
      group_id: -1001951223184,
      telegram_link: 'https://t.me/+1zMGBlbOn0NmMWEx',
    },
    {
      name: 'Olomouc',
      country_id: countryMap['Czech Republic'],
      group_id: -1002364939519,
      telegram_link: 'https://t.me/+5sGq4xvrKlhmMTFk',
    },
    {
      name: 'Prague',
      country_id: countryMap['Czech Republic'],
      group_id: -1001621903378,
      telegram_link: 'https://t.me/+HHvYSQ5Sd9QxMmRh',
    },
    // DRC
    {
      name: 'Kinshasa',
      country_id: countryMap['DRC'],
      group_id: -1002146983053,
      telegram_link: 'https://t.me/+--0ghlqnmqNlZGMx',
    },
    // Denmark
    {
      name: 'Aarhus',
      country_id: countryMap['Denmark'],
      group_id: -4241998773,
      telegram_link: 'https://t.me/+YfOriak4O0A1M2Fh',
    },
    {
      name: 'Copenhagen',
      country_id: countryMap['Denmark'],
      group_id: -4012374614,
      telegram_link: 'https://t.me/+LG9DLtgq2nxlMmQx',
    },
    // Earth
    {
      name: 'Nomad',
      country_id: countryMap['Metaverse'],
      group_id: -1002102576417,
      telegram_link: 'https://t.me/+LWk-fjrSPisyY2Yx',
    },
    // Ecuador
    {
      name: 'Cuenca',
      country_id: countryMap['Ecuador'],
      group_id: -4770909815,
      telegram_link: 'https://t.me/+ah_n4HHko1k5MmJh',
    },
    {
      name: 'Guayaquil',
      country_id: countryMap['Ecuador'],
      group_id: -4747608382,
      telegram_link: 'https://t.me/+Y0aZCIfpRK83NTdh',
    },
    {
      name: 'Portoviejo',
      country_id: countryMap['Ecuador'],
      group_id: -1002053014169,
      telegram_link: 'https://t.me/+HQXoPag4mUU1YzJh',
    },
    {
      name: 'Quito',
      country_id: countryMap['Ecuador'],
      group_id: -1002206636065,
      telegram_link: 'https://t.me/+a4wbKve3DlcxMThh',
    },
    // Egypt
    {
      name: 'Alexandria',
      country_id: countryMap['Egypt'],
      group_id: -4234210190,
      telegram_link: 'https://t.me/+pUrucfrCEWdlMzRh',
    },
    {
      name: 'Cairo',
      country_id: countryMap['Egypt'],
      group_id: -1001627172846,
      telegram_link: 'https://t.me/+Uuex2EX2rxE0ODdh',
    },
    // El Salvador
    {
      name: 'San Salvador',
      country_id: countryMap['El Salvador'],
      group_id: -1001796122227,
      telegram_link: 'https://t.me/+4wl8a4fLqdQwY2M5',
    },
    // Estonia
    {
      name: 'Tallinn',
      country_id: countryMap['Estonia'],
      group_id: -1002050125336,
      telegram_link: 'https://t.me/+uNchwPHO7iQ0ZjAx',
    },
    // Ethiopia
    {
      name: 'Addis Ababa',
      country_id: countryMap['Ethiopia'],
      group_id: -1001831250316,
      telegram_link: 'https://t.me/+ngZO1Vye-Fw4OWYx',
    },
    // Finland
    {
      name: 'Helsinki',
      country_id: countryMap['Finland'],
      group_id: -1001958709093,
      telegram_link: 'https://t.me/+e8GY4JBLtM4zMjI0',
    },
    {
      name: 'Oulu',
      country_id: countryMap['Finland'],
      group_id: -4126476907,
      telegram_link: 'https://t.me/+Ly5wslXZN9I5ZGQx',
    },
    // France
    {
      name: 'Bordeaux',
      country_id: countryMap['France'],
      group_id: -4200828989,
      telegram_link: 'https://t.me/+o-Ol66rgWnEwYWQx',
    },
    {
      name: 'Cannes',
      country_id: countryMap['France'],
      group_id: -1001971365860,
      telegram_link: 'https://t.me/+kiFuHN8XzPAzNWIx',
    },
    {
      name: 'Montpellier',
      country_id: countryMap['France'],
      group_id: -4127767316,
      telegram_link: 'https://t.me/+xgRATrNsFxJiZTUx',
    },
    // {
    //   name: 'Nice',
    //   country_id: countryMap['France'],
    //   group_id: null,
    //   telegram_link: null,
    // },
    {
      name: 'Paris',
      country_id: countryMap['France'],
      group_id: -1001946927318,
      telegram_link: 'https://t.me/+OXkspPnYexhhYmEx',
    },
    // Germany
    {
      name: 'Berlin',
      country_id: countryMap['Germany'],
      group_id: -1001751302723,
      telegram_link: 'https://t.me/+cPd97vNeP6AxMzFi',
    },
    {
      name: 'Frankfurt',
      country_id: countryMap['Germany'],
      group_id: -1002173824699,
      telegram_link: 'https://t.me/+5zzcEsIGZcBhMGEx',
    },
    {
      name: 'Hamburg',
      country_id: countryMap['Germany'],
      group_id: -1002321967053,
      telegram_link: 'https://t.me/+3zcD3mEHKo9jZTFh',
    },
    {
      name: 'Leipzig',
      country_id: countryMap['Germany'],
      group_id: -1002396117365,
      telegram_link: 'https://t.me/+c5TQkM9iRZxhMDIx',
    },
    {
      name: 'Munich',
      country_id: countryMap['Germany'],
      group_id: -1002576090247,
      telegram_link: 'https://t.me/+Ln0Ibrrnkf0zYmUx',
    },
    {
      name: 'Nuremberg',
      country_id: countryMap['Germany'],
      group_id: -4234318107,
      telegram_link: 'https://t.me/+QNPu1e8Q_-VhYmY5',
    },
    // Ghana
    {
      name: 'Accra',
      country_id: countryMap['Ghana'],
      group_id: -1002331475357,
      telegram_link: 'https://t.me/+fEIgyRNvfJM1NzJh',
    },
    {
      name: 'Wa',
      country_id: countryMap['Ghana'],
      group_id: -4636819004,
      telegram_link: 'https://t.me/+0G0yxQkwy1ZiOWQx',
    },
    // Gibraltar
    {
      name: 'Gibraltar',
      country_id: countryMap['Gibraltar'],
      group_id: -4155802557,
      telegram_link: 'https://t.me/+PK6cMbKdJ4k0OTQx',
    },
    // Greece
    {
      name: 'Athens',
      country_id: countryMap['Greece'],
      group_id: -1001821704754,
      telegram_link: 'https://t.me/+C-J2NaCcDMI2YmI5',
    },
    // Guatemala
    {
      name: 'Guatemala City',
      country_id: countryMap['Guatemala'],
      group_id: -4661554508,
      telegram_link: 'https://t.me/+HqhltY2xBmliMWYx',
    },
    {
      name: 'Quetzaltenango',
      country_id: countryMap['Guatemala'],
      group_id: -4216294878,
      telegram_link: 'https://t.me/+hAke7dCDibU2YTQx',
    },
    {
      name: 'Salamá',
      country_id: countryMap['Guatemala'],
      group_id: -4175775806,
      telegram_link: 'https://t.me/+QTj4EN2BMu9hNzBh',
    },
    // Honduras
    {
      name: 'San Pedro de Sula',
      country_id: countryMap['Honduras'],
      group_id: -4028812221,
      telegram_link: 'https://t.me/+TT8zsWyMx4MxNjFh',
    },
    {
      name: 'Tegucigalpa',
      country_id: countryMap['Honduras'],
      group_id: -1002059680857,
      telegram_link: 'https://t.me/+S98DeFzxOIlmMjUx',
    },
    // Hungary
    {
      name: 'Budapest',
      country_id: countryMap['Hungary'],
      group_id: -1002221731122,
      telegram_link: 'https://t.me/+t0seZhjvXVoxNDMx',
    },
    // Iceland
    {
      name: 'Reykjavík',
      country_id: countryMap['Iceland'],
      group_id: -4668396037,
      telegram_link: 'https://t.me/+rV2KH5GN-PE4NzQx',
    },
    // India
    {
      name: 'Agra',
      country_id: countryMap['India'],
      group_id: -4655136757,
      telegram_link: 'https://t.me/+Q-a8BPCjEHU2NDc1',
    },
    {
      name: 'Ahmedabad',
      country_id: countryMap['India'],
      group_id: -1001934401896,
      telegram_link: 'https://t.me/+SzeiTWewYTw2YzVh',
    },
    {
      name: 'Ahmednagar',
      country_id: countryMap['India'],
      group_id: -4240950560,
      telegram_link: 'https://t.me/+-00dRBVro_85M2Yx',
    },
    {
      name: 'Aligarh',
      country_id: countryMap['India'],
      group_id: -4676724881,
      telegram_link: 'https://t.me/+75FuXgZOdDE5ZmM1',
    },
    {
      name: 'Amritsar',
      country_id: countryMap['India'],
      group_id: -4671363943,
      telegram_link: 'https://t.me/+8R8C164OSXk2NmU9',
    },
    {
      name: 'Ayodhya',
      country_id: countryMap['India'],
      group_id: -4790719472,
      telegram_link: 'https://t.me/+1TGHuZiVQFMzMmNl',
    },
    {
      name: 'Bangalore',
      country_id: countryMap['India'],
      group_id: -1001884976755,
      telegram_link: 'https://t.me/+bqndjevOTtwxNWIx',
    },
    {
      name: 'Bhopal',
      country_id: countryMap['India'],
      group_id: -4683712654,
      telegram_link: 'https://t.me/+zwA6PBoy1cxhYTU1',
    },
    {
      name: 'Bhubnasewar',
      country_id: countryMap['India'],
      group_id: -4769969993,
      telegram_link: 'https://t.me/+n65hVxa_tNJmZWM1',
    },
    {
      name: 'Chamoli',
      country_id: countryMap['India'],
      group_id: -4767815564,
      telegram_link: 'https://t.me/+wb7Rcm6RgZVlZDNl',
    },
    {
      name: 'Chandigarh',
      country_id: countryMap['India'],
      group_id: -1002078177933,
      telegram_link: 'https://t.me/+b-vLVlMO-REyNTAx',
    },
    {
      name: 'Chennai',
      country_id: countryMap['India'],
      group_id: -1002077462057,
      telegram_link: 'https://t.me/+-mqY8n8888AyZTAx',
    },
    {
      name: 'Dehradun',
      country_id: countryMap['India'],
      group_id: -4700100930,
      telegram_link: 'https://t.me/+Y32B_fmTlc45N2Y1',
    },
    {
      name: 'Delhi',
      country_id: countryMap['India'],
      group_id: -1001954298676,
      telegram_link: 'https://t.me/+2n1ZfVvYcScyZTM5',
    },
    {
      name: 'Faridabad',
      country_id: countryMap['India'],
      group_id: -4634856335,
      telegram_link: 'https://t.me/+7id_nIHh_twwYWY1',
    },
    {
      name: 'Gandhinagar',
      country_id: countryMap['India'],
      group_id: -4740279316,
      telegram_link: 'https://t.me/+PZCn-8ayigFhNjE9',
    },
    {
      name: 'Ghaziabad',
      country_id: countryMap['India'],
      group_id: -4640525602,
      telegram_link: 'https://t.me/+xAWR_AX1tn9hNjhl',
    },
    {
      name: 'Goa',
      country_id: countryMap['India'],
      group_id: -1002289822885,
      telegram_link: 'https://t.me/+LagCHsVi0RExOTY9',
    },
    {
      name: 'Gorakhpur',
      country_id: countryMap['India'],
      group_id: -4690295607,
      telegram_link: 'https://t.me/+y2P02WSWriU0OTY1',
    },
    {
      name: 'Gurugram',
      country_id: countryMap['India'],
      group_id: -4786788488,
      telegram_link: 'https://t.me/+Wjob1vjI6pc3N2I9',
    },
    {
      name: 'Guwahati',
      country_id: countryMap['India'],
      group_id: -4736962691,
      telegram_link: 'https://t.me/+hTTreVvoGIdmZDE1',
    },
    {
      name: 'Hardoi',
      country_id: countryMap['India'],
      group_id: -4717605603,
      telegram_link: 'https://t.me/+IqRwTJKQooU5ZGZl',
    },
    {
      name: 'Hyderabad',
      country_id: countryMap['India'],
      group_id: -1002131933693,
      telegram_link: 'https://t.me/+JBqqowFwPB40N2Qx',
    },
    {
      name: 'Imphal',
      country_id: countryMap['India'],
      group_id: -1002068493939,
      telegram_link: 'https://t.me/+i55Ee8vt3ww0NGI1',
    },
    {
      name: 'Indore',
      country_id: countryMap['India'],
      group_id: -4681779774,
      telegram_link: 'https://t.me/+IeHvdDzi8fcyNWU1',
    },
    // {
    //   name: 'Itanagar',
    //   country_id: countryMap['India'],
    //   group_id: -4684369747,
    //   telegram_link: 'https://t.me/+v3A7_ZMxadNjMGM9', Conflicting link with Thrissur
    // },
    {
      name: 'Jaipur',
      country_id: countryMap['India'],
      group_id: -4706193107,
      telegram_link: 'https://t.me/+JQwEDMo8RAg3NWYx',
    },
    {
      name: 'Jalandhar',
      country_id: countryMap['India'],
      group_id: -1002037908990,
      telegram_link: 'https://t.me/+_-jzXGdtY400MjUx',
    },
    {
      name: 'Jammu',
      country_id: countryMap['India'],
      group_id: -1002001645582,
      telegram_link: 'https://t.me/+AOgQeakCyGUzMzdh',
    },
    {
      name: 'Jamshedpur',
      country_id: countryMap['India'],
      group_id: -4738511056,
      telegram_link: 'https://t.me/+QX8YRLusFH4xNDE1',
    },
    {
      name: 'Jhansi',
      country_id: countryMap['India'],
      group_id: -4669892121,
      telegram_link: 'https://t.me/+qnzE3sF6QD03NTM1',
    },
    {
      name: 'Kanpur',
      country_id: countryMap['India'],
      group_id: -4643025340,
      telegram_link: 'https://t.me/+-ONbG27fNZ80MzU1',
    },
    {
      name: 'Kochi',
      country_id: countryMap['India'],
      group_id: -1002023786465,
      telegram_link: 'https://t.me/+dF0gCf_lrkMzMmE5',
    },
    {
      name: 'Kohima',
      country_id: countryMap['India'],
      group_id: -4628151827,
      telegram_link: 'https://t.me/+RBN7jw6VWG5mNThl',
    },
    {
      name: 'Kolkata',
      country_id: countryMap['India'],
      group_id: -1002213373368,
      telegram_link: 'https://t.co/aCq1RdmlKA',
    },
    {
      name: 'Kollam',
      country_id: countryMap['India'],
      group_id: -4732848315,
      telegram_link: 'https://t.me/+Ui9BJzoBAI0zMjk9',
    },
    {
      name: 'Kota',
      country_id: countryMap['India'],
      group_id: -4711809574,
      telegram_link: 'https://t.me/+_Yyp5Ar1tBRmZTU1',
    },
    {
      name: 'Kozhikode',
      country_id: countryMap['India'],
      group_id: -4775610008,
      telegram_link: 'https://t.me/+I4IuWWiECzs1YTg1',
    },
    {
      name: 'Lucknow',
      country_id: countryMap['India'],
      group_id: -1002310147922,
      telegram_link: 'https://t.me/+radyFxGzZ7QxZjgx',
    },
    {
      name: 'Mangalore',
      country_id: countryMap['India'],
      group_id: -4713211350,
      telegram_link: 'https://t.me/+iQrk5KGj76dmYmQ1',
    },
    {
      name: 'Mathura',
      country_id: countryMap['India'],
      group_id: -4778077243,
      telegram_link: 'https://t.me/+eBdApQ9gMxQzMjc1',
    },
    {
      name: 'Mumbai',
      country_id: countryMap['India'],
      group_id: -1002113199177,
      telegram_link: 'https://t.me/+h9Bcpt-O94g5MTQx',
    },
    {
      name: 'Mysore',
      country_id: countryMap['India'],
      group_id: -4745957264,
      telegram_link: 'https://t.me/+YAOG6rb6WJ03YzZl',
    },
    {
      name: 'Nagpur',
      country_id: countryMap['India'],
      group_id: -4789599124,
      telegram_link: 'https://t.me/+E1Mi70lIcp04NGM9',
    },
    {
      name: 'Nashik',
      country_id: countryMap['India'],
      group_id: -4634501876,
      telegram_link: 'https://t.me/+KbN-PU0bnOg1Yjk1',
    },
    {
      name: 'Noida',
      country_id: countryMap['India'],
      group_id: -4615216072,
      telegram_link: 'https://t.me/+5f24Qc6Mgqc4ZWI9',
    },
    {
      name: 'Patna',
      country_id: countryMap['India'],
      group_id: -4670026246,
      telegram_link: 'https://t.me/+fThRvDAxIxwxNzc1',
    },
    {
      name: 'Prayagraj',
      country_id: countryMap['India'],
      group_id: -1002231024100,
      telegram_link: 'https://t.me/+KtQmGluEK5E1YmM1',
    },
    {
      name: 'Pune',
      country_id: countryMap['India'],
      group_id: -1002089176415,
      telegram_link: 'https://t.me/+JYdir9P0hixlZDNh',
    },
    {
      name: 'Raipur',
      country_id: countryMap['India'],
      group_id: -4665821318,
      telegram_link: 'https://t.me/+KeXzkjOuCytjZWZl',
    },
    {
      name: 'Ranchi',
      country_id: countryMap['India'],
      group_id: -4768614138,
      telegram_link: 'https://t.me/+TwvTS1_ZJM0yYTRl',
    },
    {
      name: 'Roorkee',
      country_id: countryMap['India'],
      group_id: -4753239426,
      telegram_link: 'https://t.me/+k-jvq3aTkI82OTc1',
    },
    {
      name: 'Shahjahanpur',
      country_id: countryMap['India'],
      group_id: -4769368421,
      telegram_link: 'https://t.me/+omufl83EJtYyNmJl',
    },
    {
      name: 'Shillong',
      country_id: countryMap['India'],
      group_id: -4656153771,
      telegram_link: 'https://t.me/+uiNkf1ksHwZiY2Q9',
    },
    {
      name: 'Solapur',
      country_id: countryMap['India'],
      group_id: -4720072569,
      telegram_link: 'https://t.me/+1JaXzazebNMzZDJl',
    },
    {
      name: 'Surat',
      country_id: countryMap['India'],
      group_id: -1002176862381,
      telegram_link: 'https://t.co/mBvp2E8FvO',
    },
    {
      name: 'Thiruvananthapuram',
      country_id: countryMap['India'],
      group_id: -4710530052,
      telegram_link: 'https://t.me/+PqU16qZR4DdjOTc1',
    },
    {
      name: 'Thrissur',
      country_id: countryMap['India'],
      group_id: -4684369747,
      telegram_link: 'https://t.me/+v3A7_ZMxadNjMGM9',
    },
    {
      name: 'Udaipur',
      country_id: countryMap['India'],
      group_id: -4661336450,
      telegram_link: 'https://t.me/+oN1ESo4tC3cyYjM9',
    },
    {
      name: 'Vadodara',
      country_id: countryMap['India'],
      group_id: -4604879961,
      telegram_link: 'https://t.me/+Tecl9_f_d3syODJl',
    },
    {
      name: 'Varanasi',
      country_id: countryMap['India'],
      group_id: -4645491200,
      telegram_link: 'https://t.me/+3f0ycIbmQ5IxMTk1',
    },
    {
      name: 'Vijayawada',
      country_id: countryMap['India'],
      group_id: -4752362485,
      telegram_link: 'https://t.me/+t8Qb5PEHJBtiOGI1',
    },
    {
      name: 'Visakhapatnam',
      country_id: countryMap['India'],
      group_id: -4716952121,
      telegram_link: 'https://t.me/+vaLp7d4o4mgwYzRl',
    },
    {
      name: 'Wayanad',
      country_id: countryMap['India'],
      group_id: -4653471787,
      telegram_link: 'https://t.me/+4pXYF7Zbbe45ZmM1',
    },
    // Indonesia
    {
      name: 'Bali',
      country_id: countryMap['Indonesia'],
      group_id: -1001966967326,
      telegram_link: 'https://t.me/+C6UPG1BdjfEyYTIx',
    },
    {
      name: 'Jakarta',
      country_id: countryMap['Indonesia'],
      group_id: -1002140124349,
      telegram_link: 'https://t.me/+7ZhU-9cB9pwxMGQx',
    },
    // Iowa
    {
      name: 'Des Moines',
      country_id: countryMap['Iowa'],
      group_id: -1002155764024,
      telegram_link: 'https://t.me/+1TiL2EdeuHM4YmQx',
    },
    // Ireland
    {
      name: 'Dublin',
      country_id: countryMap['Ireland'],
      group_id: -4221564661,
      telegram_link: 'https://t.me/+U-ejTzqWEoszNjIx',
    },
    // Israel
    {
      name: 'Haifa',
      country_id: countryMap['Israel'],
      group_id: -1002100780871,
      telegram_link: 'https://t.me/+EpI8rOOZdcw1NjM5',
    },
    {
      name: 'Tel Aviv',
      country_id: countryMap['Israel'],
      group_id: -1001816115402,
      telegram_link: 'https://t.me/+r4DLeAksHldkYjEx',
    },
    // Italy
    {
      name: 'Bari',
      country_id: countryMap['Italy'],
      group_id: -4275211022,
      telegram_link: 'https://t.me/+Tp2XGqcS2Vw0MmIx',
    },
    {
      name: 'Catania',
      country_id: countryMap['Italy'],
      group_id: -4136430541,
      telegram_link: 'https://t.me/+KjbiRENfMdpkNDAx',
    },
    {
      name: 'Florence',
      country_id: countryMap['Italy'],
      group_id: -4045743994,
      telegram_link: 'https://t.me/+ndGH31mZT5RjNjBh',
    },
    {
      name: 'Genoa',
      country_id: countryMap['Italy'],
      group_id: -1002284026910,
      telegram_link: 'https://t.me/+K4ILyFBk6Ck4MDAx',
    },
    {
      name: 'Milan',
      country_id: countryMap['Italy'],
      group_id: -1001492357235,
      telegram_link: 'https://t.me/+mWC7GYS6mEQ1MjIx',
    },
    {
      name: 'Naples',
      country_id: countryMap['Italy'],
      group_id: -4115471212,
      telegram_link: 'https://t.me/+VZgY-cV5V9UyNjY0',
    },
    {
      name: 'Palermo',
      country_id: countryMap['Italy'],
      group_id: -1002185531017,
      telegram_link: 'https://t.me/+zubMPilnn81kZjdh',
    },
    {
      name: 'Rome',
      country_id: countryMap['Italy'],
      group_id: -1001988771572,
      telegram_link: 'https://t.me/+dR9DUtKAmp4xY2Ix',
    },
    {
      name: 'Siena',
      country_id: countryMap['Italy'],
      group_id: -1002309546571,
      telegram_link: 'https://t.me/+paPW6yTu1hthMzNh',
    },
    {
      name: 'Venice',
      country_id: countryMap['Italy'],
      group_id: -4140011980,
      telegram_link: 'https://t.me/+NEzkFTj8Q884ZGVh',
    },
    // Jamaica
    {
      name: 'Kingston',
      country_id: countryMap['Jamaica'],
      group_id: -4727808353,
      telegram_link: 'https://t.me/+VAYYolGPAlE1YWNh',
    },
    // Japan
    {
      name: 'Gotemba',
      country_id: countryMap['Japan'],
      group_id: -4723425504,
      telegram_link: 'https://t.me/+Oa0M5kucughkZjVh',
    },
    {
      name: 'Nagano',
      country_id: countryMap['Japan'],
      group_id: -1002309416494,
      telegram_link: 'https://t.me/+KCJ8STyCnSQ1MDQx',
    },
    {
      name: 'Numazu',
      country_id: countryMap['Japan'],
      group_id: -1002029587191,
      telegram_link: 'https://t.me/+PNEm8qu08-Y2NTcx',
    },
    {
      name: 'Osaka',
      country_id: countryMap['Japan'],
      group_id: -1002446555351,
      telegram_link: 'https://t.me/+LX5mEkU1qxwxNjUx',
    },
    {
      name: 'Tokyo',
      country_id: countryMap['Japan'],
      group_id: -1001850851125,
      telegram_link: 'https://t.me/+5I5rAu6HoX9lMDNh',
    },
    // Kazakhstan
    {
      name: 'Almaty',
      country_id: countryMap['Kazakhstan'],
      group_id: -1002671253953,
      telegram_link: 'https://t.me/+dD3f-1zEh981OGUx',
    },
    {
      name: 'Astana',
      country_id: countryMap['Kazakhstan'],
      group_id: -1002268049321,
      telegram_link: 'https://t.me/+YhCRpfCqA1AyZWM5',
    },
    // Kenya
    {
      name: 'Diani',
      country_id: countryMap['Kenya'],
      group_id: -4630162135,
      telegram_link: 'https://t.me/+0xIsLjQwZik2ZDFh',
    },
    {
      name: 'Kilifi',
      country_id: countryMap['Kenya'],
      group_id: -4616313680,
      telegram_link: 'https://t.me/+R1sHGLbke2tmOGUx',
    },
    {
      name: 'Mombasa',
      country_id: countryMap['Kenya'],
      group_id: -4729214003,
      telegram_link: 'https://t.me/+aUB73Pg_7AozN2Qx',
    },
    {
      name: 'Nairobi',
      country_id: countryMap['Kenya'],
      group_id: -1002000129228,
      telegram_link: 'https://t.me/+2-Pbmbyg7OpiMzlh',
    },
    // Korea
    {
      name: 'Seoul',
      country_id: countryMap['Korea'],
      group_id: -1001904960414,
      telegram_link: 'https://t.me/+Wqx0SiZtewI4NGE8',
    },
    // Laos
    {
      name: 'Vientiane',
      country_id: countryMap['Laos'],
      group_id: -4266471410,
      telegram_link: 'https://t.me/+n4gtga6hsys1OTgx',
    },
    // Lebanon
    {
      name: 'Beirut',
      country_id: countryMap['Lebanon'],
      group_id: -1002146598734,
      telegram_link: 'https://t.me/+h-cVQMfuH_tkOWMx',
    },
    // Lithuania
    {
      name: 'Vilnius',
      country_id: countryMap['Lithuania'],
      group_id: -1002138914876,
      telegram_link: 'https://t.me/+CzNIxQK9pak2OGUx',
    },
    // Luxembourg
    {
      name: 'Luxembourg',
      country_id: countryMap['Luxembourg'],
      group_id: -1002106029270,
      telegram_link: 'https://t.me/+PdqHLV7b_ls0MTVk',
    },
    // Macedonia
    {
      name: 'Bitola',
      country_id: countryMap['Macedonia'],
      group_id: -1001951960129,
      telegram_link: 'https://t.me/+pCcVxUvDGC44NTU5',
    },
    // Malaysia
    {
      name: 'Genting',
      country_id: countryMap['Malaysia'],
      group_id: -1002201765268,
      telegram_link: 'https://t.me/+HcyvpoVz4X4wNDgx',
    },
    {
      name: 'Kuala Lumpur',
      country_id: countryMap['Malaysia'],
      group_id: -1001753193053,
      telegram_link: 'https://t.me/+Ch_P65PD5J83ZDYx',
    },
    // Metaverse
    {
      name: 'Decentraland',
      country_id: countryMap['Metaverse'],
      group_id: -1001947597718,
      telegram_link: 'https://t.me/+5iOZbwF-V1UzYjdh',
    },
    {
      name: 'Discord',
      country_id: countryMap['Metaverse'],
      group_id: -971182265,
      telegram_link: 'https://t.me/+JQY4VUcxDDMyMDAx',
    },
    {
      name: 'Spatial',
      country_id: countryMap['Metaverse'],
      group_id: -4275178578,
      telegram_link: 'https://t.me/+hSOFYgx9mrAwNDUx',
    },
    {
      name: 'Twitter Spaces',
      country_id: countryMap['Metaverse'],
      group_id: -859525847,
      telegram_link: 'https://t.me/+edROzSEYwFA3ZWUx',
    },
    {
      name: 'Voxels',
      country_id: countryMap['Metaverse'],
      group_id: -1001942621760,
      telegram_link: 'https://t.me/+LUnbIgPb_EBmNjIx',
    },
    {
      name: 'Zoom',
      country_id: countryMap['Metaverse'],
      group_id: -723218537,
      telegram_link: 'https://t.me/+vtuOJylJMugwMThh',
    },
    // Mexico
    {
      name: 'Acapulco',
      country_id: countryMap['Mexico'],
      group_id: -4223054946,
      telegram_link: 'https://t.me/+LpV6bahuS2diMWFh',
    },
    {
      name: 'Cancun',
      country_id: countryMap['Mexico'],
      group_id: -1002194236989,
      telegram_link: 'https://t.me/+owB12ZtbYe04MWZh',
    },
    {
      name: 'Culiacán',
      country_id: countryMap['Mexico'],
      group_id: -4616888595,
      telegram_link: 'https://t.me/+IZiBUFIWXFE4OWRh',
    },
    {
      name: 'Guadalajara',
      country_id: countryMap['Mexico'],
      group_id: -4189536268,
      telegram_link: 'https://t.me/+Qty6hBmar21kNmIx',
    },
    {
      name: 'Merida',
      country_id: countryMap['Mexico'],
      group_id: -1002355994780,
      telegram_link: 'https://t.me/+s6gJ8AnpYx0zYjgx',
    },
    {
      name: 'Mexico City',
      country_id: countryMap['Mexico'],
      group_id: -1001933255168,
      telegram_link: 'https://t.me/+YJGgOtUO-jY3OWUx',
    },
    {
      name: 'Monterrey',
      country_id: countryMap['Mexico'],
      group_id: -4055638987,
      telegram_link: 'https://t.me/+CtQVH8n1hiA3N2Mx',
    },
    {
      name: 'Puebla',
      country_id: countryMap['Mexico'],
      group_id: -1002095385199,
      telegram_link: 'https://t.me/+W107dypiEko2YjFh',
    },
    {
      name: 'Puerto Vallarta',
      country_id: countryMap['Mexico'],
      group_id: -4225399724,
      telegram_link: 'https://t.me/+35MWMtj9Y_hkZDgx',
    },
    {
      name: 'Tijuana',
      country_id: countryMap['Mexico'],
      group_id: -1001841970141,
      telegram_link: 'https://t.me/+voDjfcOpL1RmZTZh',
    },
    {
      name: 'Tulum',
      country_id: countryMap['Mexico'],
      group_id: -1001564599612,
      telegram_link: 'https://t.me/+lBSdKdkYn2M3MWM5',
    },
    {
      name: 'Veracruz',
      country_id: countryMap['Mexico'],
      group_id: -4678614931,
      telegram_link: 'https://t.me/+hIzlS5ulBBMyNDcx',
    },
    // Monaco
    {
      name: 'Monaco',
      country_id: countryMap['Monaco'],
      group_id: -1002027508843,
      telegram_link: 'https://t.me/+G4HJGaXFsuxhMWI5',
    },
    // Mongolia
    {
      name: 'Ulaanbaatar',
      country_id: countryMap['Mongolia'],
      group_id: -1001935578791,
      telegram_link: 'https://t.me/+gdzA1uLNSZgwYTMx',
    },
    // Montenegro
    {
      name: 'Podgorica',
      country_id: countryMap['Montenegro'],
      group_id: -1001934116939,
      telegram_link: 'https://t.me/+Mc3N9aGeFacwYTU5',
    },
    // Morocco
    {
      name: 'Agadir',
      country_id: countryMap['Morocco'],
      group_id: -1002143554529,
      telegram_link: 'https://t.me/+nfEqqV09JOVhM2Ux',
    },
    {
      name: 'Casablanca',
      country_id: countryMap['Morocco'],
      group_id: -1002470321076,
      telegram_link: 'https://t.me/+bZT_3pcvEWtiOTkx',
    },
    {
      name: 'Marrakech',
      country_id: countryMap['Morocco'],
      group_id: -1002371010885,
      telegram_link: 'https://t.me/+ACv3eoIimYIzYzYx',
    },
    {
      name: 'Rabat',
      country_id: countryMap['Morocco'],
      group_id: -1002224824541,
      telegram_link: 'https://t.me/+ajNxZ87r7ek4YTdh',
    },
    {
      name: 'Tangier',
      country_id: countryMap['Morocco'],
      group_id: -1001914361250,
      telegram_link: 'https://t.me/+iHAnygD0L_Y1MGYx',
    },
    // Myanmar
    {
      name: 'Yangon',
      country_id: countryMap['Myanmar'],
      group_id: -4735795678,
      telegram_link: 'https://t.me/+vnjOsSlcW5NiODZh',
    },
    // Namibia
    {
      name: 'Windhoek',
      country_id: countryMap['Namibia'],
      group_id: -4624703595,
      telegram_link: 'https://t.me/+a7we9IRuu_FkY2Ex',
    },
    // Nepal
    // {
    //   name: 'Biratnagar',
    //   country_id: countryMap['Nepal'],
    //   group_id: -4621493204,
    //   telegram_link: 'https://t.me/+AlE5Q0DFN0IzNjgx', Conflicting link with Solukumbhu
    // },
    {
      name: 'Janakpur',
      country_id: countryMap['Nepal'],
      group_id: -4614041285,
      telegram_link: 'https://t.me/+UKxCE6yYSjYzOGMx',
    },
    {
      name: 'Kathmandu',
      country_id: countryMap['Nepal'],
      group_id: -1002166665062,
      telegram_link: 'https://t.me/+GafPKUPCog45YThh',
    },
    {
      name: 'Lalitpur',
      country_id: countryMap['Nepal'],
      group_id: -4769861314,
      telegram_link: 'https://t.me/+to7J34paTIw4OTIx',
    },
    {
      name: 'Pokhara',
      country_id: countryMap['Nepal'],
      group_id: -4611660671,
      telegram_link: 'https://t.me/+YCf0OECX4_1iOGZh',
    },
    {
      name: 'Solukumbhu',
      country_id: countryMap['Nepal'],
      group_id: -4621493204,
      telegram_link: 'https://t.me/+AlE5Q0DFN0IzNjgx',
    },
    // Netherlands
    {
      name: 'Amsterdam',
      country_id: countryMap['Netherlands'],
      group_id: -852051833,
      telegram_link: 'https://t.me/+naMfu79QMfVlYzNl',
    },
    {
      name: 'Rotterdam',
      country_id: countryMap['Netherlands'],
      group_id: -4251606841,
      telegram_link: 'https://t.me/+ipov30XKajMwMTEx',
    },
    // New Zealand
    {
      name: 'Christchurch',
      country_id: countryMap['New Zealand'],
      group_id: -1002517947975,
      telegram_link: 'https://t.me/+VWfv7NwUe8Q3OWIx',
    },
    // Nicaragua
    {
      name: 'León',
      country_id: countryMap['Nicaragua'],
      group_id: -4149218550,
      telegram_link: 'https://t.me/+uL9hke26N0oxNTQx',
    },
    // Niger
    {
      name: 'Minna',
      country_id: countryMap['Niger'],
      group_id: -4763615044,
      telegram_link: 'https://t.me/+__7LS9ExqJ5hNWIx',
    },
    {
      name: 'Niamey',
      country_id: countryMap['Niger'],
      group_id: -4721810009,
      telegram_link: 'https://t.me/+6dIZ1rpEhds0YjVk',
    },
    // Nigeria
    {
      name: 'Abeokuta',
      country_id: countryMap['Nigeria'],
      group_id: -4253279746,
      telegram_link: 'https://t.me/+1C2aJzTdDqZiZWYx',
    },
    {
      name: 'Abia',
      country_id: countryMap['Nigeria'],
      group_id: -4766309988,
      telegram_link: 'https://t.me/+y7sxYa2HvyA1MDQ8',
    },
    {
      name: 'Abuja',
      country_id: countryMap['Nigeria'],
      group_id: -1002402714023,
      telegram_link: 'https://t.me/+PSiwGnJpLvo1NTJh',
    },
    {
      name: 'Akure',
      country_id: countryMap['Nigeria'],
      group_id: -4286121985,
      telegram_link: 'https://t.me/+27ihEo3GGq1kMzdh',
    },
    {
      name: 'Akwa Ibom',
      country_id: countryMap['Nigeria'],
      group_id: -4655861404,
      telegram_link: 'https://t.me/+vkT_b8g_m4sxNzQx',
    },
    {
      name: 'Anambra',
      country_id: countryMap['Nigeria'],
      group_id: -4252738276,
      telegram_link: 'https://t.me/+nFsu2DXq_y5jZDQx',
    },
    {
      name: 'Benin City',
      country_id: countryMap['Nigeria'],
      group_id: -4175476288,
      telegram_link: 'https://t.me/+qSuotV0sPglmMDZh',
    },
    // {
    //   name: 'Bida',
    //   country_id: countryMap['Nigeria'],
    //   group_id: null,
    //   telegram_link: null,
    // },
    {
      name: 'Calabar',
      country_id: countryMap['Nigeria'],
      group_id: -4711521390,
      telegram_link: 'https://t.me/+TU93RMJyMM5lNTZh',
    },
    {
      name: 'Delta',
      country_id: countryMap['Nigeria'],
      group_id: -1002049527978,
      telegram_link: 'https://t.me/+le84XK42P_RmOGEx',
    },
    {
      name: 'Ebonyi',
      country_id: countryMap['Nigeria'],
      group_id: -4640668870,
      telegram_link: 'https://t.me/+nPtJoG7-JMM1Yjgx',
    },
    {
      name: 'Enugu City',
      country_id: countryMap['Nigeria'],
      group_id: -1001886670148,
      telegram_link: 'https://t.me/+FN-o8aMZhjJmOTcx',
    },
    {
      name: 'Ibadan',
      country_id: countryMap['Nigeria'],
      group_id: -4773607752,
      telegram_link: 'https://t.me/+muLqtAzxjSM3YmE5',
    },
    {
      name: 'Ijoko',
      country_id: countryMap['Nigeria'],
      group_id: -1002105989367,
      telegram_link: 'https://t.me/+CKxe32vDKyVkMDcx',
    },
    {
      name: 'Keffi',
      country_id: countryMap['Nigeria'],
      group_id: -4712909471,
      telegram_link: 'https://t.me/+mM8wP6FZZFZmOWIx',
    },
    {
      name: 'Kwara',
      country_id: countryMap['Nigeria'],
      group_id: -4735795205,
      telegram_link: 'https://t.me/+fznrs_gQK7o4Yzc0',
    },
    {
      name: 'Lagos',
      country_id: countryMap['Nigeria'],
      group_id: -1002168866717,
      telegram_link: 'https://t.me/+zOdAqKYVfYZjYTMx',
    },
    {
      name: 'Lokoja City',
      country_id: countryMap['Nigeria'],
      group_id: -4706102647,
      telegram_link: 'https://t.me/+Ox5H1huZpjdiMjUx',
    },
    {
      name: 'Nsukka',
      country_id: countryMap['Nigeria'],
      group_id: -4287377446,
      telegram_link: 'https://t.me/+rTpcAPYAHikyMzkx',
    },
    {
      name: 'Osogbo',
      country_id: countryMap['Nigeria'],
      group_id: -4279047324,
      telegram_link: 'https://t.me/+uhZa8PpO4wg0Yzkx',
    },
    {
      name: 'Port Harcourt',
      country_id: countryMap['Nigeria'],
      group_id: -4114940290,
      telegram_link: 'https://t.me/+s4A7qfjC6ZxhYTY5',
    },
    {
      name: 'Yenagoa',
      country_id: countryMap['Nigeria'],
      group_id: -1001822765196,
      telegram_link: 'https://t.me/+yZkp7kEtqVNiOWVh',
    },
    // Norway
    {
      name: 'Kongsberg',
      country_id: countryMap['Norway'],
      group_id: -4066227113,
      telegram_link: 'https://t.me/+aJUS7O_iE0Y2YTVh',
    },
    {
      name: 'Svalbard',
      country_id: countryMap['Norway'],
      group_id: -4614244864,
      telegram_link: 'https://t.me/+Dz5rMEexZP4yMmMx',
    },
    {
      name: 'Vennesla',
      country_id: countryMap['Norway'],
      group_id: -1002120606152,
      telegram_link: 'https://t.me/+GlSGeUpKgcAyZDhh',
    },
    // Pakistan
    {
      name: 'Islamabad',
      country_id: countryMap['Pakistan'],
      group_id: -1002110262683,
      telegram_link: 'https://t.me/+kVImvt5_UfY3NTIx',
    },
    {
      name: 'Karachi',
      country_id: countryMap['Pakistan'],
      group_id: -838021684,
      telegram_link: 'https://t.me/+i2EUTOxcpf41MTAx',
    },
    {
      name: 'Lahore',
      country_id: countryMap['Pakistan'],
      group_id: -1002041002336,
      telegram_link: 'https://t.me/+yS7riBYRgTEyNzdl',
    },
    {
      name: 'Larkana',
      country_id: countryMap['Pakistan'],
      group_id: -1002679371290,
      telegram_link: 'https://t.me/+erfvIwA0KThmYWRk',
    },
    // Palau
    {
      name: 'Koror',
      country_id: countryMap['Palau'],
      group_id: -4148277582,
      telegram_link: 'https://t.me/+NmeGQAD1m_EzN2Qx',
    },
    // Panama
    {
      name: 'Panama City',
      country_id: countryMap['Panama'],
      group_id: -4750445540,
      telegram_link: 'https://t.me/+hhdQmJ8qtiE5ZTE5',
    },
    // Peru
    {
      name: 'Cuzco',
      country_id: countryMap['Peru'],
      group_id: -4121520945,
      telegram_link: 'https://t.me/+M1MwSfps-WU5MjMx',
    },
    {
      name: 'Huancayo',
      country_id: countryMap['Peru'],
      group_id: -4218180327,
      telegram_link: 'https://t.me/+KPSP3rqp-A4zYzFh',
    },
    {
      name: 'Lima',
      country_id: countryMap['Peru'],
      group_id: -1002074273355,
      telegram_link: 'https://t.me/+8QnRNKTE77Q5YzBh',
    },
    {
      name: 'Trujillo',
      country_id: countryMap['Peru'],
      group_id: -4204890689,
      telegram_link: 'https://t.me/+AW5F96Tf7hljZjIx',
    },
    // Philippines
    {
      name: 'Aklan',
      country_id: countryMap['Philippines'],
      group_id: -4723138465,
      telegram_link: 'https://t.me/+KKgvymkDMcY5NTMx',
    },
    {
      name: 'Baguio',
      country_id: countryMap['Philippines'],
      group_id: -4723597037,
      telegram_link: 'https://t.me/+iwBMQ2xqQGEyNDUx',
    },
    {
      name: 'Boracay',
      country_id: countryMap['Philippines'],
      group_id: -4619352405,
      telegram_link: 'https://t.me/+DuZu8iHM1e5lMWQ5',
    },
    // {
    //   name: 'Cebu City',
    //   country_id: countryMap['Philippines'],
    //   group_id: null,
    //   telegram_link: null,
    // },
    {
      name: 'Davao City',
      country_id: countryMap['Philippines'],
      group_id: -4693310676,
      telegram_link: 'https://t.me/+MO6VmWLSv79mYTQx',
    },
    {
      name: 'General Santos',
      country_id: countryMap['Philippines'],
      group_id: -4722824337,
      telegram_link: 'https://t.me/+VJz3dGazUJY2OWEx',
    },
    {
      name: 'Ilocos',
      country_id: countryMap['Philippines'],
      group_id: -4784434885,
      telegram_link: 'https://t.me/+2QFwSwwGjOE0Zjgx',
    },
    {
      name: 'Laguna',
      country_id: countryMap['Philippines'],
      group_id: -4708354643,
      telegram_link: 'https://t.me/+YwfqXDBQO945NTg5',
    },
    {
      name: 'Las Pinas',
      country_id: countryMap['Philippines'],
      group_id: -4690163534,
      telegram_link: 'https://t.me/+icY-CNtpn-g4MDhh',
    },
    {
      name: 'Manila',
      country_id: countryMap['Philippines'],
      group_id: -4763502888,
      telegram_link: 'https://t.me/+4FkaReqixsA0MjMx',
    },
    {
      name: 'Paranaque',
      country_id: countryMap['Philippines'],
      group_id: -4685638581,
      telegram_link: 'https://t.me/+sEalu6O9iVgyYzUx',
    },
    {
      name: 'Quezon',
      country_id: countryMap['Philippines'],
      group_id: -4679490083,
      telegram_link: 'https://t.me/+39EiWfztZz9lNTMx',
    },
    {
      name: 'Siargao',
      country_id: countryMap['Philippines'],
      group_id: -4239520480,
      telegram_link: 'https://t.me/+NRd6vXyPQlk2Y2Ex',
    },
    {
      name: 'Siquijor',
      country_id: countryMap['Philippines'],
      group_id: -1002495739126,
      telegram_link: 'https://t.me/+qmG5rFJdwZw0Yjhh',
    },
    {
      name: 'Tomas Morato',
      country_id: countryMap['Philippines'],
      group_id: -4642848179,
      telegram_link: 'https://t.me/+fy7tqrfr_qA4Mjdh',
    },
    {
      name: 'Vigan/Ilocos',
      country_id: countryMap['Philippines'],
      group_id: -4616815765,
      telegram_link: 'https://t.me/+nP4nS8c2AbRlMTRh',
    },
    // Poland
    {
      name: 'Krakow',
      country_id: countryMap['Poland'],
      group_id: -1002335823638,
      telegram_link: 'https://t.me/+IG1kLGKIt3IzNjUx',
    },
    {
      name: 'Warsaw',
      country_id: countryMap['Poland'],
      group_id: -1002063556271,
      telegram_link: 'https://t.me/+pI53T5LHWfdhMjgx',
    },
    // Portugal
    {
      name: 'Lisbon',
      country_id: countryMap['Portugal'],
      group_id: -1001915098454,
      telegram_link: 'https://t.me/+IsepskfDTyZmNWYx',
    },
    {
      name: 'Loule',
      country_id: countryMap['Portugal'],
      group_id: -1002142073354,
      telegram_link: 'https://t.me/+Kf0xXoADzPRjMGIx',
    },
    // Puerto Rico
    {
      name: 'Guaynabo',
      country_id: countryMap['Puerto Rico'],
      group_id: -4748459658,
      telegram_link: 'https://t.me/+O1xdPZNptj0wNmUx',
    },
    {
      name: 'San Juan',
      country_id: countryMap['Puerto Rico'],
      group_id: -1001857117722,
      telegram_link: 'https://t.me/+p81KaKF0bfk0Njkx',
    },
    // Qatar
    {
      name: 'Doha',
      country_id: countryMap['Qatar'],
      group_id: -1001877356088,
      telegram_link: 'https://t.me/+X1RVyILxrZMzM2Zh',
    },
    // Rep.Dominicana
    {
      name: 'Santo Domingo',
      country_id: countryMap['Rep.Dominicana'],
      group_id: -4102267761,
      telegram_link: 'https://t.me/+FVnbLNBt28Y3MjIx',
    },
    // Romania
    {
      name: 'Bucharest',
      country_id: countryMap['Romania'],
      group_id: -1001832612790,
      telegram_link: 'https://t.me/+_PBg32ciHDU2NWRh',
    },
    {
      name: 'Craiova',
      country_id: countryMap['Romania'],
      group_id: -1002412363938,
      telegram_link: 'https://t.me/+pwlLgytvbYE5Zjdk',
    },
    // Russia
    {
      name: 'Moscow',
      country_id: countryMap['Russia'],
      group_id: -1001829076795,
      telegram_link: 'https://t.me/+X1M7zABbNdxiNWMy',
    },
    {
      name: 'Petrozavodsk',
      country_id: countryMap['Russia'],
      group_id: -4288451487,
      telegram_link: 'https://t.me/+mY5K44qlxTQzYWM5',
    },
    {
      name: 'Saint Petersburg',
      country_id: countryMap['Russia'],
      group_id: -1001891606158,
      telegram_link: 'https://t.me/+uhteIo_oAbtjOTgx',
    },
    // Rwanda
    {
      name: 'Kigali',
      country_id: countryMap['Rwanda'],
      group_id: -1002441145231,
      telegram_link: 'https://t.me/+08IUt0my5kI5MzZk',
    },
    // Serbia
    {
      name: 'Belgrade',
      country_id: countryMap['Serbia'],
      group_id: -4115881809,
      telegram_link: 'https://t.me/+3OT7bulyIXI3MjNh',
    },
    // Singapore
    {
      name: 'Singapore',
      country_id: countryMap['Singapore'],
      group_id: -1001936537659,
      telegram_link: 'https://t.me/+3xoZROco3_tkYzMx',
    },
    // Slovakia
    {
      name: 'Bratislava',
      country_id: countryMap['Slovakia'],
      group_id: -1001620975244,
      telegram_link: 'https://t.me/+TYU9KL2TKB8xNDUx',
    },
    {
      name: 'Kosice',
      country_id: countryMap['Slovakia'],
      group_id: -1002496105809,
      telegram_link: 'https://t.me/+kOoQtd0n3yM1YjQx',
    },
    // Slovenia
    {
      name: 'Ljubljana',
      country_id: countryMap['Slovenia'],
      group_id: -1002477120506,
      telegram_link: 'https://t.me/+F7IlQDeSEgU4NTBh',
    },
    // South Africa
    {
      name: 'Cape Town',
      country_id: countryMap['South Africa'],
      group_id: -1929327768,
      telegram_link: 'https://t.me/+jB8hcNG1q2Q1NTYx',
    },
    {
      name: 'Durban',
      country_id: countryMap['South Africa'],
      group_id: -1002103655881,
      telegram_link: 'https://t.me/+Lt7pM-oTAWdiMmUx',
    },
    {
      name: 'Johannesberg',
      country_id: countryMap['South Africa'],
      group_id: -4176295876,
      telegram_link: 'https://t.me/+xx0YVLpwQyFkY2Mx',
    },
    // Spain
    {
      name: 'Barcelona',
      country_id: countryMap['Spain'],
      group_id: -1002084067100,
      telegram_link: 'https://t.me/+NQ07jFmUgTUwMjEx',
    },
    {
      name: 'Burgos',
      country_id: countryMap['Spain'],
      group_id: -1002158731184,
      telegram_link: 'https://t.me/+3RnvXOt6f4szMGEx',
    },
    {
      name: 'Las Palmas de Gran Canaria',
      country_id: countryMap['Spain'],
      group_id: -4737102391,
      telegram_link: 'https://t.me/+o0uLz-mAh0g2NTMx',
    },
    {
      name: 'Ibiza',
      country_id: countryMap['Spain'],
      group_id: -4230790250,
      telegram_link: 'https://t.me/+jvlgv_PTa5gzMWE5',
    },
    {
      name: 'Madrid',
      country_id: countryMap['Spain'],
      group_id: -1001956973891,
      telegram_link: 'https://t.me/+6CS2vjriPNJhMDQx',
    },
    {
      name: 'Málaga',
      country_id: countryMap['Spain'],
      group_id: -1002689164265,
      telegram_link: 'https://t.me/+Br0YD2x4qFAzOWQx',
    },
    {
      name: 'Marbella',
      country_id: countryMap['Spain'],
      group_id: -4211679111,
      telegram_link: 'https://t.me/+Ry40vWGyQRZiNGUx',
    },
    {
      name: 'Sevilla',
      country_id: countryMap['Spain'],
      group_id: -1002128471880,
      telegram_link: 'https://t.me/+6UgKgyN2mVQ4Mjgx',
    },
    {
      name: 'Valencia',
      country_id: countryMap['Spain'],
      group_id: -1002691275827,
      telegram_link: 'https://t.me/+-D7ejg_nIUhlYTJh',
    },
    // Sri Lanka
    {
      name: 'Colombo',
      country_id: countryMap['Sri Lanka'],
      group_id: -1002082430258,
      telegram_link: 'https://t.me/+-wwdYHq8wx0zOTIx',
    },
    {
      name: 'Galle',
      country_id: countryMap['Sri Lanka'],
      group_id: -4754189002,
      telegram_link: 'https://t.me/+Y26Ba6VmwVQyNDYx',
    },
    {
      name: 'Kandy',
      country_id: countryMap['Sri Lanka'],
      group_id: -4751551223,
      telegram_link: 'https://t.me/+nIAH1LX6UW8zNWM5',
    },
    // Suriname
    {
      name: 'Paramaribo',
      country_id: countryMap['Suriname'],
      group_id: -4054026131,
      telegram_link: 'https://t.me/+D_IJlXjZ4vUxZjA5',
    },
    // Sweden
    {
      name: 'Göteborg',
      country_id: countryMap['Sweden'],
      group_id: -4279911850,
      telegram_link: 'https://t.me/+FTFIURURfNplYzAx',
    },
    {
      name: 'Lulea',
      country_id: countryMap['Sweden'],
      group_id: -4215212072,
      telegram_link: 'https://t.me/+fMgKGVPYLL5jMzcx',
    },
    {
      name: 'Lund',
      country_id: countryMap['Sweden'],
      group_id: -4069141800,
      telegram_link: 'https://t.me/+hkiCtDehzhxmOTc5',
    },
    {
      name: 'Stockholm',
      country_id: countryMap['Sweden'],
      group_id: -1001865471383,
      telegram_link: 'https://t.me/+3DgTGOZy81s5NTYx',
    },
    // Switzerland
    {
      name: 'Geneva',
      country_id: countryMap['Switzerland'],
      group_id: -4009814166,
      telegram_link: 'https://t.me/+GXLkscR2BTUwNGMx',
    },
    {
      name: 'Lugano',
      country_id: countryMap['Switzerland'],
      group_id: -4156776645,
      telegram_link: 'https://t.me/+NMOBj_4urIEzNmRh',
    },
    {
      name: 'Zug',
      country_id: countryMap['Switzerland'],
      group_id: -1001636091568,
      telegram_link: 'https://t.me/+N4Gs0Ki8fuE3NDEx',
    },
    {
      name: 'Zurich',
      country_id: countryMap['Switzerland'],
      group_id: -1001813938435,
      telegram_link: 'https://t.me/+_rluvh99fnVhOGZh',
    },
    // Tahití
    {
      name: 'Papeete',
      country_id: countryMap['Tahití'],
      group_id: -1002533513518,
      telegram_link: 'https://t.me/+qMxQM8diAeBlOTI0',
    },
    // Taiwan
    {
      name: 'Taipei',
      country_id: countryMap['Taiwan'],
      group_id: -1001921311196,
      telegram_link: 'https://t.me/+ZxoowO2hW_tjYTMx',
    },
    // Tanzania
    {
      name: 'Dar es Salaam',
      country_id: countryMap['Tanzania'],
      group_id: -1002194989946,
      telegram_link: 'https://t.me/+yJJu6C0dO0cwYTI5',
    },
    {
      name: 'Zanzibar',
      country_id: countryMap['Tanzania'],
      group_id: -4003593959,
      telegram_link: 'https://t.me/+CduFF329ZncwZDdh',
    },
    // Tatu
    {
      name: 'Tatu',
      country_id: countryMap['Kenya'],
      group_id: -4674379348,
      telegram_link: 'https://t.me/+cIMDDm9UMj05YTI8',
    },
    // Thailand
    {
      name: 'Bangkok',
      country_id: countryMap['Thailand'],
      group_id: -4097484564,
      telegram_link: 'https://t.me/+xLLV1VHhZVgyYjBh',
    },
    {
      name: 'Chiang Mai',
      country_id: countryMap['Thailand'],
      group_id: -1002045224143,
      telegram_link: 'https://t.me/+O6XqQEM6byoyMzUx',
    },
    {
      name: 'Koh Phangan',
      country_id: countryMap['Thailand'],
      group_id: -1002119225517,
      telegram_link: 'https://t.me/+YZJPPA5aXrExZmMx',
    },
    {
      name: 'Phuket',
      country_id: countryMap['Thailand'],
      group_id: -1002140472307,
      telegram_link: 'https://t.me/+XSwWCgpP5J85MGIx',
    },
    // Togo
    {
      name: 'Lomé',
      country_id: countryMap['Togo'],
      group_id: -1002368962692,
      telegram_link: 'https://t.me/+SIk1s_i7r5kyZWVh',
    },
    // Tunisia
    {
      name: 'Tunis',
      country_id: countryMap['Tunisia'],
      group_id: -4289532966,
      telegram_link: 'https://t.me/+0F9F_J8xfYtiMWZh',
    },
    // Turkey
    {
      name: 'Istanbul',
      country_id: countryMap['Turkey'],
      group_id: -1001812959169,
      telegram_link: 'https://t.me/+KFGFTGuqT2hhZDcx',
    },
    // UAE
    {
      name: 'Dubai',
      country_id: countryMap['UAE'],
      group_id: -1001929523548,
      telegram_link: 'https://t.me/+1TgAfrDVFfo0MWIx',
    },
    {
      name: 'Sharjah',
      country_id: countryMap['UAE'],
      group_id: -4236683677,
      telegram_link: 'https://t.me/+Ie-FLlCfVhQ3ZDcx',
    },
    // USA AL
    {
      name: 'Auburn',
      country_id: countryMap['USA AL'],
      group_id: -4144578791,
      telegram_link: 'https://t.me/+SXEG2-K0W7JjMjMx',
    },
    {
      name: 'Mobile',
      country_id: countryMap['USA AL'],
      group_id: -1001852091991,
      telegram_link: 'https://t.me/+5-RwsDjsWkY2MDUx',
    },
    {
      name: 'Montgomery, AL',
      country_id: countryMap['USA AL'],
      group_id: -1002622509517,
      telegram_link: 'https://t.me/+2Uq2tmJtvuYwNzQx',
    },
    // USA AR
    {
      name: 'Little Rock',
      country_id: countryMap['USA AR'],
      group_id: -1001953292078,
      telegram_link: 'https://t.me/+lNJnhl3Qi81lYzVh',
    },
    // USA AZ
    {
      name: 'Phoenix',
      country_id: countryMap['USA AZ'],
      group_id: -1001979115189,
      telegram_link: 'https://t.me/+MVRkWvVbw1o1NDAx',
    },
    {
      name: 'Tucson',
      country_id: countryMap['USA AZ'],
      group_id: -4255207920,
      telegram_link: 'https://t.me/+anxfwcEJIZs5NjNh',
    },
    // USA CA
    {
      name: 'Los Angeles',
      country_id: countryMap['USA CA'],
      group_id: -1001955545426,
      telegram_link: 'https://t.me/+RkBppH46fno0Mzhh',
    },
    {
      name: 'Sacramento',
      country_id: countryMap['USA CA'],
      group_id: -1001768777703,
      telegram_link: 'https://t.me/+u5psCYkK3XswNzVh',
    },
    {
      name: 'San Diego',
      country_id: countryMap['USA CA'],
      group_id: -1001951064426,
      telegram_link: 'https://t.me/+lSPm0xLjhcllNGYx',
    },
    {
      name: 'San Francisco',
      country_id: countryMap['USA CA'],
      group_id: -1001659340296,
      telegram_link: 'https://t.me/+AS4yAcoKJ_gyMmNh',
    },
    {
      name: 'Santa Barbara',
      country_id: countryMap['USA CA'],
      group_id: -1002037453278,
      telegram_link: 'https://t.me/+i_bI6WuiBik3ODNh',
    },
    // USA CO
    {
      name: 'Breckenridge',
      country_id: countryMap['USA CO'],
      group_id: -4788254827,
      telegram_link: 'https://t.me/+gNLg6x3vI8o4OThh',
    },
    {
      name: 'Denver',
      country_id: countryMap['USA CO'],
      group_id: -1001901998325,
      telegram_link: 'https://t.me/+d7SLX-caPJY0NWVh',
    },
    // USA CT
    {
      name: 'New Haven',
      country_id: countryMap['USA CT'],
      group_id: -1001960951380,
      telegram_link: 'https://t.me/+X91wtHELfVE4ODMx',
    },
    // USA DC
    {
      name: 'Washington DC',
      country_id: countryMap['USA DC'],
      group_id: -1001980808812,
      telegram_link: 'https://t.me/+pKB4CbfhSgFkMGRh',
    },
    // USA FL
    {
      name: 'Boynton Beach',
      country_id: countryMap['USA FL'],
      group_id: -4758024552,
      telegram_link: 'https://t.me/+A7GFaaVvKz4zNDVh',
    },
    {
      name: 'Delray Beach',
      country_id: countryMap['USA FL'],
      group_id: -1001923745853,
      telegram_link: 'https://t.me/+ZZgNhfSUGwlkNWQx',
    },
    {
      name: 'Fort Lauderdale',
      country_id: countryMap['USA FL'],
      group_id: -993470362,
      telegram_link: 'https://t.me/+rEocnMP6U2ZjNDE5',
    },
    {
      name: 'Fort Myers, Florida',
      country_id: countryMap['USA FL'],
      group_id: -904886377,
      telegram_link: 'https://t.me/+pnOEUF5A02JlOTEx',
    },
    {
      name: 'Jacksonville',
      country_id: countryMap['USA FL'],
      group_id: -4217932627,
      telegram_link: 'https://t.me/+vEAFOjbHdO9hNDYx',
    },
    {
      name: 'Miami',
      country_id: countryMap['USA FL'],
      group_id: -1001848543159,
      telegram_link: 'https://t.me/+vN4-DUbEpbUzYzlh',
    },
    {
      name: 'Orlando',
      country_id: countryMap['USA FL'],
      group_id: -1002041972674,
      telegram_link: 'https://t.me/+MJXe-gLvWp1kZGRh',
    },
    {
      name: 'Palm Beach',
      country_id: countryMap['USA FL'],
      group_id: -1002411901188,
      telegram_link: 'https://t.me/+z6mdsYoBwyYzNjkx',
    },
    {
      name: 'Pensacola',
      country_id: countryMap['USA FL'],
      group_id: -4020126645,
      telegram_link: 'https://t.me/+aiymHQffjWw1M2Ex',
    },
    {
      name: 'Sarasota',
      country_id: countryMap['USA FL'],
      group_id: -1002298500423,
      telegram_link: 'https://t.me/+qzQ_VMoaRTlmOTYx',
    },
    {
      name: 'Tampa',
      country_id: countryMap['USA FL'],
      group_id: -885831381,
      telegram_link: 'https://t.me/+uSjXMqqhWKs2NDNh',
    },
    // USA GA
    {
      name: 'Atlanta',
      country_id: countryMap['USA GA'],
      group_id: -1001911439204,
      telegram_link: 'https://t.me/+bamsDW_7unBhYWUx',
    },
    {
      name: 'Macon',
      country_id: countryMap['USA GA'],
      group_id: -4166293923,
      telegram_link: 'https://t.me/+i95-fKe1vLhjNjYx',
    },
    {
      name: 'Savannah',
      country_id: countryMap['USA GA'],
      group_id: -1002255315006,
      telegram_link: 'https://t.me/+QHH4uQZuXFhiODNh',
    },
    // USA HI
    {
      name: 'Honolulu',
      country_id: countryMap['USA HI'],
      group_id: -1002037813022,
      telegram_link: 'https://t.me/+xQfXJDHFWuAxZWJh',
    },
    {
      name: 'Maui',
      country_id: countryMap['USA HI'],
      group_id: -4003337981,
      telegram_link: 'https://t.me/+Je9mLVLkTIVjNzlh',
    },
    // USA IA/IL
    {
      name: 'Cedar Rapids',
      country_id: countryMap['USA IA/IL'],
      group_id: -4744188788,
      telegram_link: 'https://t.me/+mJCKvvNT5mtjMGYx',
    },
    {
      name: 'Quad Cities',
      country_id: countryMap['USA IA/IL'],
      group_id: -1001904619533,
      telegram_link: 'https://t.me/+l3MwN7RUZWpiNjEx',
    },
    // USA ID
    {
      name: 'Boise',
      country_id: countryMap['USA ID'],
      group_id: -4250998386,
      telegram_link: 'https://t.me/+AzbmW_uM9mg3NGUx',
    },
    {
      name: 'Idaho Falls',
      country_id: countryMap['USA ID'],
      group_id: -4747546945,
      telegram_link: 'https://t.me/+pyTqiwfdEc1hMjYx',
    },
    // USA IL
    {
      name: 'Chicago',
      country_id: countryMap['USA IL'],
      group_id: -1001876823312,
      telegram_link: 'https://t.me/+4nPNFdwz4jplMjZh',
    },
    // USA LA
    {
      name: 'Baton Rouge',
      country_id: countryMap['USA LA'],
      group_id: -4285617154,
      telegram_link: 'https://t.me/+yG2hgGBp2cplMjcx',
    },
    {
      name: 'Lafayette',
      country_id: countryMap['USA LA'],
      group_id: -4211761931,
      telegram_link: 'https://t.me/+qdntGRPCiuk4MjVh',
    },
    {
      name: 'New Orleans',
      country_id: countryMap['USA LA'],
      group_id: -1002142636849,
      telegram_link: 'https://t.me/+KpSt9__p6HtkZGFh',
    },
    // USA MA
    {
      name: 'Boston',
      country_id: countryMap['USA MA'],
      group_id: -1001784720819,
      telegram_link: 'https://t.me/+wOJakZRTsAsyOTYx',
    },
    // USA MD
    {
      name: 'Baltimore',
      country_id: countryMap['USA MD'],
      group_id: -1002436148992,
      telegram_link: 'https://t.me/+IwdyttUkCY4xZWRh',
    },
    {
      name: 'College Park',
      country_id: countryMap['USA MD'],
      group_id: -4749340620,
      telegram_link: 'https://t.me/+bgUeOsMOBx45NTVh',
    },
    // USA ME
    {
      name: 'Bar Harbor',
      country_id: countryMap['USA ME'],
      group_id: -1002561812738,
      telegram_link: 'https://t.me/+fZHiSsqXJzkxMWNh',
    },
    {
      name: 'Portland ME',
      country_id: countryMap['USA ME'],
      group_id: -1001706123313,
      telegram_link: 'https://t.me/+uPXnn4hhcRQ2NzZh',
    },
    // USA MI
    {
      name: 'Detroit',
      country_id: countryMap['USA MI'],
      group_id: -1001861690209,
      telegram_link: 'https://t.me/+wh1VsLXGZSQ0ZGNh',
    },
    // { name: 'Lansing', country_id: countryMap['USA MI'], group_id: null, telegram_link: null },
    // USA MN
    {
      name: 'Minneapolis',
      country_id: countryMap['USA MN'],
      group_id: -1002035990391,
      telegram_link: 'https://t.me/+ozZADc9SdDo1NjI5',
    },
    // USA MO
    {
      name: 'Kansas City',
      country_id: countryMap['USA MO'],
      group_id: -4204915522,
      telegram_link: 'https://t.me/+8QNU8o2wA3lmNjMx',
    },
    {
      name: 'St. Louis',
      country_id: countryMap['USA MO'],
      group_id: -1002128385877,
      telegram_link: 'https://t.me/+4PgaMue1d-E5YThh',
    },
    // USA MS
    {
      name: 'Jackson',
      country_id: countryMap['USA MS'],
      group_id: -4100252645,
      telegram_link: 'https://t.me/+cQWRXlXxXn0yZGQx',
    },
    // USA MT
    {
      name: 'Billings',
      country_id: countryMap['USA MT'],
      group_id: -934240716,
      telegram_link: 'https://t.me/+eEXewhRLjx85ZTRh',
    },
    // USA NC
    {
      name: 'Asheville',
      country_id: countryMap['USA NC'],
      group_id: -1001858679317,
      telegram_link: 'https://t.me/+twziZvY06SdiYTc5',
    },
    {
      name: 'Charlotte',
      country_id: countryMap['USA NC'],
      group_id: -1001975351136,
      telegram_link: 'https://t.me/+NqGCsRp9f7NkZWE5',
    },
    {
      name: 'Durham',
      country_id: countryMap['USA NC'],
      group_id: -1001860209592,
      telegram_link: 'https://t.me/+SjD_d9-sQV8wMzMx',
    },
    // USA NE
    {
      name: 'Omaha',
      country_id: countryMap['USA NE'],
      group_id: -1001880959581,
      telegram_link: 'https://t.me/+BmV6x3L-55AxZDBh',
    },
    // USA NH
    {
      name: 'Dartmouth',
      country_id: countryMap['USA NH'],
      group_id: -4257519060,
      telegram_link: 'https://t.me/+4hzuze60H_k5Y2Nh',
    },
    {
      name: 'Laconia',
      country_id: countryMap['USA NH'],
      group_id: -4790229162,
      telegram_link: 'https://t.me/+veFEz1urPmMyYjUx',
    },
    // USA NJ
    {
      name: 'Atlantic City',
      country_id: countryMap['USA NJ'],
      group_id: -4154984838,
      telegram_link: 'https://t.me/+rGtfdMLxF_4zOTZh',
    },
    {
      name: 'Princeton',
      country_id: countryMap['USA NJ'],
      group_id: -4022896549,
      telegram_link: 'https://t.me/+Oijp2tmfJv01YWEx',
    },
    // USA NV
    {
      name: 'Las Vegas',
      country_id: countryMap['USA NV'],
      group_id: -1001763068129,
      telegram_link: 'https://t.me/+iTjqCmTu8WE0MWYx',
    },
    // USA NY
    {
      name: 'New York City',
      country_id: countryMap['USA NY'],
      group_id: -1001660274961,
      telegram_link: 'https://t.me/+GqDSZQksjbUzYmJh',
    },
    {
      name: 'Syracuse',
      country_id: countryMap['USA NY'],
      group_id: -4627791614,
      telegram_link: 'https://t.me/+LAACD1grYo42ZGJh',
    },
    // USA NYC
    {
      name: 'Hamptons',
      country_id: countryMap['USA NYC'],
      group_id: -4755987026,
      telegram_link: 'https://t.me/+3VVFKLua_tNiNWRh',
    },
    // USA OH
    {
      name: 'Cincinnati',
      country_id: countryMap['USA OH'],
      group_id: -1001544278711,
      telegram_link: 'https://t.me/+eVJxkVbunFJkYzM5',
    },
    {
      name: 'Cleveland',
      country_id: countryMap['USA OH'],
      group_id: -4000634653,
      telegram_link: 'https://t.me/+DwiKB0vu01FlOTYx',
    },
    {
      name: 'Columbus',
      country_id: countryMap['USA OH'],
      group_id: -1002113878633,
      telegram_link: 'https://t.me/+f3A-jHKjjZM5ZWUx',
    },
    {
      name: 'Toledo',
      country_id: countryMap['USA OH'],
      group_id: -1001980057729,
      telegram_link: 'https://t.me/+PVOuYtrvQe42MWMx',
    },
    // USA OK
    {
      name: 'Oklahoma City',
      country_id: countryMap['USA OK'],
      group_id: -899092662,
      telegram_link: 'https://t.me/+yQyQEtAyWKxlYTBh',
    },
    {
      name: 'Tulsa',
      country_id: countryMap['USA OK'],
      group_id: -1001830261643,
      telegram_link: 'https://t.me/+e6toEK8-cD4wZDMx',
    },
    // USA OR
    {
      name: 'Portland Oregon',
      country_id: countryMap['USA OR'],
      group_id: -1001825156130,
      telegram_link: 'https://t.me/+wjMKnf-PjZliZDFh',
    },
    // USA PA
    {
      name: 'Philadelphia',
      country_id: countryMap['USA PA'],
      group_id: -1001891405115,
      telegram_link: 'https://t.me/+F_xcWStGv3cyZjZh',
    },
    {
      name: 'Pittsburgh',
      country_id: countryMap['USA PA'],
      group_id: -1001920025032,
      telegram_link: 'https://t.me/+m-4LshblVMczZTFh',
    },
    // USA RI
    {
      name: 'Providence',
      country_id: countryMap['USA RI'],
      group_id: -1001928061403,
      telegram_link: 'https://t.me/+cZm6wCyBFe9jZDIx',
    },
    // USA SC
    {
      name: 'Charleston',
      country_id: countryMap['USA SC'],
      group_id: -4229697154,
      telegram_link: 'https://t.me/+j42gKZ3zj9NjYTk5',
    },
    // USA TN
    {
      name: 'Memphis',
      country_id: countryMap['USA TN'],
      group_id: -4691661141,
      telegram_link: 'https://t.me/+aFHZ_DgR-jdhZDhh',
    },
    {
      name: 'Nashville',
      country_id: countryMap['USA TN'],
      group_id: -1001912076100,
      telegram_link: 'https://t.me/+1oZKgTYeDzIwYzVh',
    },
    // USA TX
    {
      name: 'Austin',
      country_id: countryMap['USA TX'],
      group_id: -1001903078648,
      telegram_link: 'https://t.me/+leFse3SJr8s1M2Y5',
    },
    {
      name: 'Dallas',
      country_id: countryMap['USA TX'],
      group_id: -1001907291709,
      telegram_link: 'https://t.me/+Nuzj4PmfrSwzYTJh',
    },
    {
      name: 'Houston',
      country_id: countryMap['USA TX'],
      group_id: -1001839292638,
      telegram_link: 'https://t.me/+pxvIVFZQHwE2Yjcx',
    },
    {
      name: 'San Antonio',
      country_id: countryMap['USA TX'],
      group_id: -4250202110,
      telegram_link: 'https://t.me/+FP6h6XdeUAc4YTFh',
    },
    // USA UT
    {
      name: 'Saint George',
      country_id: countryMap['USA UT'],
      group_id: -1002205659103,
      telegram_link: 'https://t.me/+L6ZmZLORtYI1NDJh',
    },
    {
      name: 'Salt Lake City',
      country_id: countryMap['USA UT'],
      group_id: -1002531566855,
      telegram_link: 'https://t.me/+WD_p-cvJKBQyNWQx',
    },
    // USA VA
    {
      name: 'Richmond Virginia',
      country_id: countryMap['USA VA'],
      group_id: -4623578295,
      telegram_link: 'https://t.me/+vKktl1TNLJBlZmYx',
    },
    {
      name: 'Williamsburg',
      country_id: countryMap['USA VA'],
      group_id: -1002030215131,
      telegram_link: 'https://t.me/+NR7r06G_YDRiZjcx',
    },
    // USA WA
    {
      name: 'Seattle',
      country_id: countryMap['USA WA'],
      group_id: -1001916230034,
      telegram_link: 'https://t.me/+wrWMCY2bRvUzZTkx',
    },
    // USA WI
    {
      name: 'Milwaukee',
      country_id: countryMap['USA WI'],
      group_id: -940139003,
      telegram_link: 'https://t.me/+W5yHpIDxRjM3MTNh',
    },
    // Uganda
    {
      name: 'Kampala',
      country_id: countryMap['Uganda'],
      group_id: -1776540613,
      telegram_link: 'https://t.me/+nCyNgF5C-5AwZjBh',
    },
    // Ukraine
    {
      name: 'Kharkiv',
      country_id: countryMap['Ukraine'],
      group_id: -4242708049,
      telegram_link: 'https://t.me/+R0jSEJbf-Dw2MTlh',
    },
    // United Kingdom
    {
      name: 'Cambridge',
      country_id: countryMap['United Kingdom'],
      group_id: -1002248433290,
      telegram_link: 'https://t.me/+LH5K36-G6U44MTEx',
    },
    {
      name: 'London',
      country_id: countryMap['United Kingdom'],
      group_id: -1001891361479,
      telegram_link: 'https://t.me/+A1RZij0a-B80YjAx',
    },
    {
      name: 'Manchester',
      country_id: countryMap['United Kingdom'],
      group_id: -1001800038163,
      telegram_link: 'https://t.me/+wlwhI6-ENUMxMDQx',
    },
    {
      name: 'Swansea',
      country_id: countryMap['United Kingdom'],
      group_id: -1002126680495,
      telegram_link: 'https://t.me/+bIix-Y-NkwUzZjMx',
    },
    // Uruguay
    {
      name: 'Montevideo',
      country_id: countryMap['Uruguay'],
      group_id: -1001811983537,
      telegram_link: 'https://t.me/+6YKirsMQtsc1OGMx',
    },
    {
      name: 'Punta del Este',
      country_id: countryMap['Uruguay'],
      group_id: -1001961964415,
      telegram_link: 'https://t.me/+ens68u7Nhio1YWQx',
    },
    {
      name: 'Rivera',
      country_id: countryMap['Uruguay'],
      group_id: -4632417295,
      telegram_link: 'https://t.me/+AYWeAOWOGUViZDAx',
    },
    // Venezuela
    {
      name: 'Caracas',
      country_id: countryMap['Venezuela'],
      group_id: -4113831151,
      telegram_link: 'https://t.me/+x7IozaDgL9lmMGNh',
    },
    {
      name: 'El Hatillo',
      country_id: countryMap['Venezuela'],
      group_id: -4626634346,
      telegram_link: 'https://t.me/+JHW2B_ef5iA1MTNh',
    },
    {
      name: 'Maracaibo',
      country_id: countryMap['Venezuela'],
      group_id: -4246298079,
      telegram_link: 'https://t.me/+9wnptRM4urE3OTIx',
    },
    {
      name: 'Maturin',
      country_id: countryMap['Venezuela'],
      group_id: -4684268440,
      telegram_link: 'https://t.me/+PGts8XOtjSY1NmM5',
    },
    {
      name: 'Ojeda',
      country_id: countryMap['Venezuela'],
      group_id: -4603430414,
      telegram_link: 'https://t.me/+oxLXGv7ryDA5NmU5',
    },
    {
      name: 'Tachira',
      country_id: countryMap['Venezuela'],
      group_id: -4031045414,
      telegram_link: 'https://t.me/+uvrkg5VQRz4yYWUx',
    },
    {
      name: 'Valencia / isla margarita',
      country_id: countryMap['Venezuela'],
      group_id: -4161651047,
      telegram_link: 'https://t.me/+9uFu0rfIE0gzYmZh',
    },
    // Vietnam
    {
      name: 'Da Nang',
      country_id: countryMap['Vietnam'],
      group_id: -4247375805,
      telegram_link: 'https://t.me/+WlRVOj6tmFRiNjlh',
    },
    {
      name: 'Hanoi',
      country_id: countryMap['Vietnam'],
      group_id: -1002207877554,
      telegram_link: 'https://t.me/+Z0WgPvd7_wwzMzAx',
    },
    {
      name: 'Ho Chi Minh City',
      country_id: countryMap['Vietnam'],
      group_id: -985230103,
      telegram_link: 'https://t.me/+5x1Rya5F5yBlYTlh',
    },
    {
      name: 'Hue City',
      country_id: countryMap['Vietnam'],
      group_id: -1002001884441,
      telegram_link: 'https://t.me/+PxMQXP3dDD4wNWFh',
    },
    // Zambia
    {
      name: 'Kitwe',
      country_id: countryMap['Zambia'],
      group_id: -1002490988767,
      telegram_link: 'https://t.me/+KG4m5hMdqcM2MWJh',
    },
    {
      name: 'Lusaka',
      country_id: countryMap['Zambia'],
      group_id: -4172860644,
      telegram_link: 'https://t.me/+01kAFecVL9ZkNmQx',
    },
    // Zimbabwe
    {
      name: 'Bulawayo',
      country_id: countryMap['Zimbabwe'],
      group_id: -4778641704,
      telegram_link: 'https://t.me/+3hjtBMqyxgZiMWEx',
    },
    {
      name: 'Harare',
      country_id: countryMap['Zimbabwe'],
      group_id: -1002263622423,
      telegram_link: 'https://t.me/+i06gg9ln789kYTAx',
    },
  ]);
}
