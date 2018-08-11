declare module "@sap/hdbext" {
  export namespace constants {
    enum types {
      TINYINT = 1,
      SMALLINT = 2,
      INT = 3,
      INTEGER = 3,
      BIGINT = 4,
      DECIMAL = 5,
      REAL = 6,
      DOUBLE = 7,
      CHAR = 8,
      VARCHAR = 9,
      NCHAR = 10,
      NVARCHAR = 11,
      BINARY = 12,
      VARBINARY = 13,
      DATE = 14,
      TIME = 15,
      TIMESTAMP = 16,
      CLOB = 25,
      NCLOB = 26,
      BLOB = 27,
      BOOLEAN = 28,
      STRING = 29,
      NSTRING = 30,
      BLOCATOR = 31,
      NLOCATOR = 32,
      BSTRING = 33,
      TABLE = 45,
      SMALLDECIMAL = 47,
      ABAPITAB = 48,
      ABAPSTRUCT = 49,
      ARRAY = 50,
      TEXT = 51,
      SHORTTEXT = 52,
      ALPHANUM = 55,
      LONGDATE = 61,
      SECONDDATE = 62,
      DAYDATE = 63,
      SECONDTIME = 64
    }

    enum isolation {
      READ_COMMITTED = 2,
      REPEATABLE_READ = 4,
      SERIALIZABLE = 8
    }

    interface IDictionary {
      [index: number]: string;
    }

    interface IisolationLevelValues {
      2: "READ COMMITTED";
      4: "REPEATABLE READ";
      8: "SERIALIZABLE";
    }

    const isolationLevelValues: IisolationLevelValues;

    const typeKeys: IDictionary;
  }
}
