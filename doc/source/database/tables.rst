
******************
Tables in database
******************

This section goes into great detail about each table present in database. Each sub-section shows:

1. Table name (and full name)
#. Dependencies to other tables (foreign keys)
#. SQL syntax used to create said table
#. Description for each column in given table
#. Sample data for given table


dnd_characterclass
******************

Table name
==========

dnd_characterclass:
    Table of (playable) character classes.

Dependencies
============

None

SQL syntax
==========

.. code-block:: sqlite3
    :linenos:

    CREATE TABLE "dnd_characterclass" (
      "id" int(11) NOT NULL ,
      "name" varchar(64) NOT NULL,
      "slug" varchar(64) NOT NULL,
      "prestige" tinyint(1) NOT NULL DEFAULT '0',
      "short_description" longtext NOT NULL,
      "short_description_html" longtext NOT NULL,
      PRIMARY KEY ("id")
    );
    CREATE INDEX "dnd_characterclass_dnd_characterclass_slug_uniq" ON "dnd_characterclass" ("slug");
    CREATE INDEX "dnd_characterclass_dnd_characterclass_a951d5d6" ON "dnd_characterclass" ("slug");
    CREATE INDEX "dnd_characterclass_dnd_characterclass_name" ON "dnd_characterclass" ("name");



Column description
==================

.. csv-table::
    :header: "No.", "Name", "Description"
    :widths: 1, 1, 40

    "1", "id", "Primary key for this table"
    "2", "name", "Name of character class"
    "3", "slug", "Name of character class, but in slug format (all lower case, dashes instead of spaces)"
    "4", "prestige", "Bool value marking prestige classes (1 = prestige; 0 = normal (default))"
    "5", "short_description", "Description of the class as seen in manual"
    "6", "short_description_html", "As above short_description, but with HTML tags for proper formatting"

Sample data
===========

.. csv-table::
    :header: "Column name", "Value"
    :widths: 1, 40

    "id", "205"
    "name", "Pious Templar"
    "slug", "pious-templar"
    "prestige", "1"
    "short_description", "worn to the defense of a temple site, the pious templar is a holy warrior blessed by her deity with combat prowess and great endurance."
    "short_description_html", "<p>Sworn to the defense of a temple site, the pious templar is a holy warrior blessed by her deity with combat prowess and great endurance.</p>"



