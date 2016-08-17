Table name
==========

attributes:
    Table of attributes owned by a monster.

Dependencies
============

Foreign key requirement: monster_id == monsters.id

SQL syntax
==========

.. code-block::

    CREATE TABLE "attributes" (
        `id`    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
        `monster_id`    INTEGER NOT NULL,
        `str`   INTEGER NOT NULL DEFAULT 3,
        `dex`   INTEGER NOT NULL DEFAULT 3,
        `con`   INTEGER NOT NULL DEFAULT 3,
        `wis`   INTEGER NOT NULL DEFAULT 3,
        `int`   INTEGER NOT NULL DEFAULT 3,
        `cha`   INTEGER NOT NULL DEFAULT 3,
            FOREIGN KEY(`monster_id`) REFERENCES monsters(id)
    )



Column description
==================

.. csv-table::
    :header: "No.", "Name", "Description"
    :widths: 1, 1, 40

    "1", "id", "Primary key for this table"
    "2", "monster_id", "Foreign key referencing table 'monsters'"
    "3", "str", "Strength score of monster"
    "4", "dex", "Dexterity score of monster"
    "5", "con", "Condition score of monster"
    "6", "wis", "Wisdom score of monster"
    "7", "int", "Intelligence score of monster"
    "8", "cha", "Charisma score of monster"

Sample data
===========

.. csv-table::
    :header: "Column name", "Value"
    :widths: 1, 40

    "id", "1"
    "monster_id", "1"
    "str", "10"
    "dex", "12"
    "con", "5"
    "wis", "16"
    "int", "7"
    "cha", "13"
    
