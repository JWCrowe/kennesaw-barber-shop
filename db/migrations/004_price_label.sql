-- Kennesaw: menu board price ranges ("$35-40") for the starter menu. Square sync clears it so Square prices win.
alter table services add column if not exists price_label text;
