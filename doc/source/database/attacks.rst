Table name
==========

attacks:
    Table of attacks performed by creatures.

Dependencies
============

Foreign key requirement: monster_id == monsters.id

SQL syntax
==========

.. code-block::

    CREATE TABLE "attacks" (
		`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
		`monster_id`	INTEGER NOT NULL,
		`name`	TEXT NOT NULL,
		`attack_bonus`	INTEGER NOT NULL DEFAULT 0,
		`hd_type`	INTEGER NOT NULL DEFAULT 2,
		`hd_amount`	INTEGER NOT NULL DEFAULT 1,
		`damage_bonus`	INTEGER NOT NULL,
		`crit_threat`	INTEGER NOT NULL DEFAULT 20,
		`crit_multiplier`	INTEGER NOT NULL DEFAULT 2,
		`range`	INTEGER NOT NULL DEFAULT 0,
		`type`	TEXT NOT NULL DEFAULT 'Physical',
			FOREIGN KEY(`monster_id`) REFERENCES `monsters`(`id`)
	)



Column description
==================

.. csv-table::
    :header: "No.", "Name", "Description"
    :widths: 1, 1, 40

    "1", "id", "Primary key for this table"
    "2", "monster_id", "Foreign key referencing table 'monsters'"
    "3", "name", "Descriptive name of attack"
    "4", "attack_bonus", "Numerical attack bonus. For every 5 units of attack bonus, monster gets another attack in turn at -5 bonus. For example, if this value is 13, monster gets 3 attacks at 13, 8 and 3 bonuses"
    "5", "hd_type", "Type of hit die for damage from this attack - in attack dealing '1k6+2' damage, this would be '6'"
    "6", "hd_amount", "Amount of die for damage from this attack - in attack dealing '1k6+2' damage, this would be '1'."
    "7", "damage_bonus", "Amount of damage added to resulting hit die roll - in attack dealing '1k6+2' damage, this would be '2'."
    "8", "crit_threat", "Miminal result of k20 attack roll, which threats with critical strike (use value 21 to indicate - crit not possible)"
    "9", "crit_multiplier", "Damage multiplier in case critical strike occurs"
    "10", "range", "Range at which attack can be performed (in meters). 0 [meters] means it's meele range"
    "6", "type", "Type of damage this attack deals (for example: physical, electric, energy, etc.)"

Sample data
===========

.. csv-table::
    :header: "Column name", "Value"
    :widths: 1, 40

    "id", "1"
    "monster_id", "1"
    "name", "Crust"
    "attack_bonus", "1"
    "hd_type", "2"
    "hd_amount", "1"
    "damage_bonus", "3"
    "crit_threat", "20"
    "crit_multiplier", "2"
    "range", "0"
    "type", "Chocolate"
