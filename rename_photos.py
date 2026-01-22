import os
import glob

def safe_rename_images(directory):
    if not os.path.exists(directory):
        print(f"Directory {directory} not found.")
        return

    # Get all jpg files (case insensitive)
    files = sorted(glob.glob(os.path.join(directory, "*.[jJ][pP][gG]")))
    
    # Identify 1.jpg to preserve it if it exists
    main_photo = os.path.join(directory, "1.jpg")
    has_main = False
    
    # Check if 1.jpg is in the list (handling case sensitivity if needed, but usually lowercase)
    for f in files:
        if os.path.basename(f).lower() == "1.jpg":
            main_photo = f
            has_main = True
            break
            
    # Files to rename (exclude 1.jpg)
    if has_main:
        files_to_rename = [f for f in files if os.path.abspath(f) != os.path.abspath(main_photo)]
    else:
        # If no 1.jpg, rename all starting from 2? Or should we create a 1.jpg?
        # Assuming 1.jpg SHOULD exist. If not, we might rename the first one to 1.jpg?
        # For now, let's assume 1.jpg exists or we just rename everything else starting from 2.
        # If 1.jpg is missing, the gallery main photo will be broken.
        files_to_rename = files

    if not files_to_rename:
        print(f"No files to rename in {directory}.")
        return

    print(f"Renaming {len(files_to_rename)} files in {directory}...")

    # Step 1: Rename to temporary names to avoid collisions
    temp_files = []
    for i, file_path in enumerate(files_to_rename):
        temp_name = os.path.join(directory, f"temp_rename_{i}.jpg")
        os.rename(file_path, temp_name)
        temp_files.append(temp_name)

    # Step 2: Rename to sequential numbers starting from 2
    counter = 2
    for temp_path in temp_files:
        new_name = os.path.join(directory, f"{counter}.jpg")
        os.rename(temp_path, new_name)
        counter += 1
        
    print(f"Renamed files in {directory} to 2.jpg ... {counter-1}.jpg")

print("Processing cadelrestel...")
safe_rename_images("cadelrestel")

print("Processing terrazzasuimonti...")
safe_rename_images("terrazzasuimonti")

print("Processing terrazzalagolezzeno...")
safe_rename_images("terrazzalagolezzeno")
